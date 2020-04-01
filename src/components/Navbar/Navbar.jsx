import React from 'react'
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom"

let Navbar = () => {
    return (
        <div className={s.nav}>
            <NavLink to="/job/users" activeClassName={s.activeLink}>Исполнители</NavLink>
            <NavLink to="/job/tasks" activeClassName={s.activeLink}>Задания</NavLink>
            <NavLink to="/job/companies" activeClassName={s.activeLink}>Компании</NavLink>
        </div>
    )
}

export default Navbar;