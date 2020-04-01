import React from "react";
import s from "./Icons.module.css"

let IconDialogs = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="33" height="33" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1538 26C4.54603 26 0 21.9785 0 17.0178C0 12.057 4.54603 8.03552 10.1538 8.03552C15.7617 8.03552 20.3077 12.057 20.3077 17.0178C20.3077 18.767 19.7424 20.3995 18.7647 21.78L20.3077 24.9022L15.3303 24.7467C13.8145 25.5429 12.0445 26 10.1538 26Z"/>
            <path d="M6.26407 18.3664L5.43089 18.3924L5.80021 17.6451L7.21356 14.7853C6.28447 13.3796 5.74846 11.7378 5.74846 9.98225C5.74846 4.68949 10.5777 0.5 16.4023 0.5C22.2269 0.5 27.0562 4.68949 27.0562 9.98225C27.0562 15.275 22.2269 19.4645 16.4023 19.4645C14.4796 19.4645 12.6725 19.0111 11.1115 18.215L6.26407 18.3664Z" stroke="#F9F9F9"/>
        </svg>

    )
}

export default IconDialogs;