import React from "react";
import s from "./Icons.module.css"


let IconShare = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }

    return (
        <svg className={className} width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5211 17.316V14.4C15.5211 14.4 8.57746 12.48 4.08451 18.24C2.50464 20.2654 1.93708 22.2571 1.7378 23.284C1.66018 23.684 1.31631 24 0.908846 24C0.432752 24 0.0732704 23.5751 0.166409 23.1082C0.660469 20.6315 2.27681 13.6491 5.30986 10.56C11.4366 4.32 15.5211 4.8 15.5211 4.8V1.99654C15.5211 1.17313 16.4606 0.702579 17.12 1.19571L27.8746 9.23842C28.4253 9.65024 28.4057 10.4821 27.8361 10.8675L17.0815 18.1442C16.4174 18.5935 15.5211 18.1178 15.5211 17.316Z"/>
        </svg>
    )
}

export default IconShare;