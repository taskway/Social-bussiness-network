import React from 'react';
import preloader from "../../../assets/images/preloader.svg";
import s from "./preloader.module.css";

let Preloader = (props) => {
    return (
        <div className={!props.preloaderFullScreen ? s.preloader : s.preloaderFullScreen}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;