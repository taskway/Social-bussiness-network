import React from "react";
import s from "./Icons.module.css"

let IconMessages = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="33" height="33" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 35C5.8203 35 0 29.8513 0 23.5C0 17.1487 5.8203 12 13 12C20.1797 12 26 17.1487 26 23.5C26 25.7396 25.2763 27.8296 24.0245 29.5971L26 33.5944L19.6275 33.3954C17.6868 34.4147 15.4207 35 13 35Z"/>
        <path d="M8.01561 23.0942L7.18243 23.1202L7.55175 22.3729L9.39708 18.639C8.19428 16.8459 7.5 14.7462 7.5 12.5C7.5 5.81673 13.6035 0.5 21 0.5C28.3965 0.5 34.5 5.81673 34.5 12.5C34.5 19.1833 28.3965 24.5 21 24.5C18.5473 24.5 16.244 23.9185 14.2579 22.8993L8.01561 23.0942Z" stroke="white"/>
        </svg>
    )
}

export default IconMessages;