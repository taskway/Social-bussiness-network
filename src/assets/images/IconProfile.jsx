import React from "react";
import s from "./Icons.module.css"

let IconProfile = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="25" height="33" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.88889 6.25C4.88889 9.70178 7.62493 12.5 11 12.5C14.3751 12.5 17.1111 9.70178 17.1111 6.25C17.1111 2.79822 14.3751 0 11 0C7.62493 0 4.88889 2.79822 4.88889 6.25Z"/>
            <path d="M22 21.25V23.75C22 24.4404 21.4528 25 20.7778 25C20.1028 25 19.5007 25 19.5007 25H19.0528H18.6049C18.6049 25 17.9139 25 15.8889 25H6.11111H3.51371H2.85185C2.85185 25 1.89724 25 1.22222 25C0.547207 25 0 24.4404 0 23.75V21.25C0 17.7982 2.73604 15 6.11111 15H15.8889C19.264 15 22 17.7982 22 21.25Z"/>
        </svg>
    )
}

export default IconProfile;