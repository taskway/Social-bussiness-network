import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import IconWork from "../../assets/images/IconWork";
import IconProfile from "../../assets/images/IconProfile";
import IconDialogs from "../../assets/images/IconDialogs";
import IconSettings from "../../assets/images/IconSettings";

let Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.topMenu}>
                <div>
                    <NavLink to="/job/users" activeClassName={s.activeLink}>
                        <div>
                            <IconWork className="panelButtons"/>
                            <div className={s.title}>Работа</div>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/profile" activeClassName={s.activeLink}>
                        <div>
                            <IconProfile className="panelButtons"/>
                            <div className={s.title}>Профиль</div>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/job/dialogs" activeClassName={s.activeLink}>
                        <div>
                            <IconDialogs className="panelButtons"/>
                            <div className={s.title}>Диалоги</div>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/job/settings" activeClassName={s.activeLink}>
                        <div>
                            <IconSettings className="panelButtons"/>
                            <div className={s.title}>Настройки</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


export default Header;