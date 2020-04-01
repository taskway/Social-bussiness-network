import React from 'react'
import s from './Message.module.css'

const Message = ({message: { user, text}, name}) => {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser
            ? (
                <div className={`${s.container} ${s.r}`}>
                    {/*<div className={s.name}>{trimmedName}</div>*/}
                    <div className={s.text}>{text}</div>
                </div>
            )
            : (
                <div className={s.container}>
                    <div className={s.name}>{user}</div>
                    <div className={s.text}>{text}</div>
                </div>
            )
    )
}


export default Message