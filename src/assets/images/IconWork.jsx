import React from "react";
import s from "./Icons.module.css"

let IconWork = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="24" height="33" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2 2.74752C20.2 1.23011 19.0695 0 17.675 0H2.525C1.13048 0 0 1.23011 0 2.74752V18.4267C0 19.9441 1.13048 21.1742 2.525 21.1742H4.97685L10.1 25.25L15.2232 21.1742H17.675C19.0695 21.1742 20.2 19.9441 20.2 18.4267V2.74752Z"/>
            <path d="M9.41123 8.45337L10.7975 8.45337L10.9054 17.1277L9.29502 17.1277L9.41123 8.45337ZM10.9635 5.81372C10.9635 6.06274 10.8888 6.27026 10.7394 6.43628C10.5844 6.60783 10.3575 6.6936 10.0587 6.6936C9.75986 6.6936 9.53298 6.60783 9.37803 6.43628C9.22308 6.27026 9.14561 6.06274 9.14561 5.81372C9.14561 5.5647 9.22308 5.35718 9.37803 5.19116C9.53298 5.03068 9.75986 4.95044 10.0587 4.95044C10.3575 4.95044 10.5844 5.03068 10.7394 5.19116C10.8888 5.35718 10.9635 5.5647 10.9635 5.81372Z" fill="white"/>
        </svg>
    )
}

export default IconWork;