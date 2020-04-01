import React from "react";
import s from "./Icons.module.css"

let IconTasks = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 3.26438C24 1.46151 22.6569 0 21 0H3C1.34314 0 0 1.46151 0 3.26438V21.8931C0 23.696 1.34315 25.1575 3 25.1575H5.91308L12 30L18.087 25.1575H21C22.6569 25.1575 24 23.696 24 21.8931V3.26438Z" />
            <path d="M11.311 10.4116L12.6973 10.4116L12.8052 19.0859L11.1948 19.0859L11.311 10.4116ZM12.8633 7.77197C12.8633 8.021 12.7886 8.22851 12.6392 8.39453C12.4842 8.56608 12.2573 8.65185 11.9585 8.65185C11.6597 8.65185 11.4328 8.56608 11.2778 8.39453C11.1229 8.22851 11.0454 8.02099 11.0454 7.77197C11.0454 7.52295 11.1229 7.31543 11.2778 7.14941C11.4328 6.98893 11.6597 6.90869 11.9585 6.90869C12.2573 6.90869 12.4842 6.98893 12.6392 7.14941C12.7886 7.31543 12.8633 7.52295 12.8633 7.77197Z" fill="white"/>
        </svg>
    )
}

export default IconTasks;