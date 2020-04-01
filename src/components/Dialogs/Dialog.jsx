import React, {useState, useEffect, useRef} from 'react'
import s from './dialogs.module.css'
import IconSendMessage from "../../assets/images/IconSendMessage"
import io from 'socket.io-client'
const socket = io('http://192.168.1.47:3001')

let timerIdStoppedTyping


let initialStatus = {
    users: []
}

const Dialog = ({roomMessages, addMessage, room, me, currentUser}) => {
    const [messages, setMessages] = useState(roomMessages)
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(initialStatus)
    const messagesRef = useRef(null)

    // Загружаем все сообщения данного диалога
    useEffect( () => {
        setMessages(roomMessages)
        messagesRef.current.scrollTo(0,9999999)
    }, [roomMessages])


    // Подключаемся к диалогу
    useEffect( () => {
        socket.emit('join the room', {
            userId: me._id,
            userName: me.name,
            room: room
        })
        return () => {
            socket.off('disconnect')
        }
    }, [socket.id, room])



    useEffect( () => {
        // Канал от сервера: печатает сообщение...
        socket.on('typing', data => {
            const user = status.users.find(u => u.id === data.userId);
            if (!user) {
                setStatus({...status, users: [...status.users, {id: data.userId, typing: 'печатает...'}]})
            }
        })


        // Канал от сервера: перестал печатать сообщение...
        socket.on('stopped typing', data => {
            const newStatus = status.users.filter(user => {
                return user.id !== data.userId
            })
            setStatus({...status, users: newStatus})
        })


        // Канал от сервера: сообщение
        socket.on('message', data => {
            console.log(data)
            setMessages([...messages, {
                _id: data._id,
                user: {
                    _id: data.userId,
                    name: data.userName
                },
                message: data.message
            }])
            messagesRef.current.scrollTo(0,9999999)
        })
        return () => {
            socket.off()
        }
    }, [socket.id, messages, status])


    // Сигнал на сервер: печатает... сообщение
    const stoppedTyping = () => {
        socket.emit('stopped typing', {
            room: room,
            userName: me.name,
            userId: me._id
        })
    }


    // Сигнал на сервер: сообщение
    const submitMessage = (e) => {
        e.preventDefault()
        socket.emit('message', {
            message: message,
            room: room,
            userId: me._id,
            userName: me.name,
            currentUserId: currentUser._id
        })
        clearTimeout(timerIdStoppedTyping)
        stoppedTyping()
        setMessage('')
    }


    // Сигнал на сервер: печатает... сообщение
    const onMessageChange = (e) => {
        setMessage(e.currentTarget.value)
        socket.emit('typing', {
            room: room,
            userName: me.name,
            userId: me._id
        })
        clearTimeout(timerIdStoppedTyping)
        timerIdStoppedTyping = setTimeout(stoppedTyping, 2000)
    }


    return (
        <div className={s.dialog} style={{gridArea: 'cc'}}>
            <div className={s.currentUserName}>{currentUser.name}</div>
            <div className={s.userStatus}>
                {status.users
                    ?
                    status.users.map((u,i) => (
                    <div key={i}>{u.id != me._id ? u.typing : null}</div>
                )) : null}
            </div>
                <div ref={messagesRef} className={s.messagesContainer}>
                    <div className={s.endItems}>
                    {messages
                        ?
                        messages.map(message => (
                            <div key={message._id} className={s.message}>
                                <div className={me._id == message.user._id ? s.currentUser : s.otherUser}>
                                    <div className={s.userName}>{message.user.name}</div>
                                    <div className={s.textMessage}>{message.message}</div>
                                </div>
                            </div>
                        ))
                        : null }
                    </div>
                </div>
                <form onSubmit={submitMessage}>
                    <div className={s.formContainer}>
                        <div>
                            <input
                                id="message"
                                placeholder="Введите сообщение"
                                type="text"
                                autoComplete="off"
                                value={message}
                                onChange={onMessageChange}
                                className={s.inputMessage}
                            />
                        </div>
                        <div className={s.sendMessage} onClick={submitMessage}>
                            <IconSendMessage className="panelButtons"/>
                        </div>
                    </div>
                </form>
        </div>
)
}

export default Dialog