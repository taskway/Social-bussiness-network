import React from "react";
import s from "./ControlPanel.module.css";
import time from "../../assets/images/icon_time.svg";
import mytasks from "../../assets/images/icon_mytasks.svg";
import search from "../../assets/images/icon_search.svg";
import filter from "../../assets/images/icon_filter.svg";
import IconFavorites from "../../assets/images/IconFavorites";

let ControlPanel = () => {
    return (
        <div className={s.controlPanel}>
            <div className={s.buttons}>
                <img src={time} alt="Предложенные задачи"/>
                <img src={mytasks} alt="Мои задачи"/>
            </div>
            <div className={s.inputSearch}>
                <input type="text"/>
                <img src={search} alt="Поиск"/>
            </div>
            <div className={s.buttons}>
                <IconFavorites className="panelButtons"/>
                <img src={filter} alt="Фильтр"/>
            </div>
        </div>
    )
}

export default ControlPanel;