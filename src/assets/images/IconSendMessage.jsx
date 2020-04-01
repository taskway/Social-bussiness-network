import React from "react";
import s from "./Icons.module.css"

let IconSendMessage = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="26" height="22" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
            <path d="M26 11L9.45698e-07 22C1.11369e-06 18.1567 1.20771e-06 16.0058 1.34e-06 12.9794L12.4348 11L1.51305e-06 9.02042C1.64534e-06 5.9941 -1.67993e-07 3.84324 0 -1.1365e-06L26 11Z"/>
        </svg>
    )
}

export default IconSendMessage;