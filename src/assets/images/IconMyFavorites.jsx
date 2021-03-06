import React from "react";
import s from "./Icons.module.css"

let IconMyFavorites = (props) => {

    var className = '';

    if(props.className === 'userButtons') {
        className = s.userButtons;
    }
    if(props.className === 'panelButtons') {
        className = s.panelButtons;
    }

    return (
        <svg className={className} width="26" height="26" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6171 0.613326C10.9412 -0.204444 12.0588 -0.204441 12.3829 0.613328L15.0838 7.42712L22.1214 8.01914C22.9643 8.09006 23.3085 9.17808 22.6696 9.75237L17.2987 14.58L18.9356 21.7809C19.1306 22.6386 18.2277 23.3125 17.5045 22.849L11.5 19.0007L5.49551 22.849C4.77233 23.3125 3.8694 22.6386 4.06438 21.7809L5.70135 14.58L0.330449 9.75237C-0.308467 9.17808 0.0356548 8.09006 0.878635 8.01914L7.91624 7.42712L10.6171 0.613326Z"/>
        </svg>
    )
}

export default IconMyFavorites;