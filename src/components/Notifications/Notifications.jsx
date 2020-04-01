import React, {useState, useEffect} from 'react'
/*import socket from '../../api/socket'*/
import s from './Notifications.module.css'
import io from 'socket.io-client'
const socket = io('http://192.168.1.47:3001')

const Notifications = ({me}) => {
    const [popupMessage, setPopupMessage] = useState()
    const [audio] = useState(new Audio('https://notificationsounds.com/message-tones/open-up-587/download/mp3'))


    useEffect(() => {
        socket.emit('connection', {
            userId: me._id,
            userName: me.name,
            room: me._id
        })
        socket.emit('join the room', {
            userId: me._id,
            userName: me.name,
            room: me._id
        })
        return () => {
            socket.off('disconnect')
        }
    }, [socket.id])

    useEffect(() => {
        socket.on('notification', data => {
            audio.play()
            setPopupMessage(data)
        })
        return () => {
            socket.off()
        }
    }, [socket.id, popupMessage])

    const closePopup = () => {
        setPopupMessage()
    }

    return (
        <>
            {popupMessage ?

            <div className={s.popupContainer}>
                <div className={s.user}>
                    {popupMessage.userName}
                </div>
                <div className={s.messageContainer}>
                    <div className={s.message}>
                        {popupMessage.message}
                    </div>
                </div>
                <div className={s.close} onClick={closePopup}>х</div>
            </div>

            : null}
        </>
    )
}

export default Notifications