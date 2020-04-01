import React, {useState, useEffect, useRef} from 'react'
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer"
import s from "./App.module.css"
import HeaderContainer from "./components/Header/HeaderContainer"
import Navbar from "./components/Navbar/Navbar"
import ControlPanel from "./components/ControlPanel/ControlPanel"
import ProfileContainer from "./components/Profile/ProfileContainer"
import Login from "./components/login/Login"
import {connect} from "react-redux"
import {compose} from "redux"
import {initializeApp} from "./redux/app-reducer"
import Preloader from "./components/common/Preloader/Preloader"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import Notifications from "./components/Notifications/Notifications"
import socket from "./api/socket";

const App = (props) => {
    const initialized = props.initialized

    useEffect(() => {
        props.initializeApp()
    },[initialized])

        if (!initialized) {
            return <Preloader preloaderFullScreen={true}/>
        } else {
            return (
                <div className={s.app_wrapper}>
                    {props.isAuth &&
                        <>
                            <HeaderContainer/>
                            <Notifications me={props.me}/>
                        </>
                    }
                    <Switch>
                        <Route path='/' exact><Redirect to='/profile'/></Route>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/job/users' children={() => (
                            <>
                                <Navbar/>
                                <ControlPanel/>
                                <UsersContainer/>
                            </>
                        )}/>
                        <Route path='/profile' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs/:userId' children={() => (
                            <>
                                <DialogsContainer/>
                            </>
                        )}/>
                        <Route exact path='*' render={() => (
                            <div style={{
                                fontSize:20,
                                gridArea: 'cc',
                                textAlign: 'center'}}>Упс...страница не найдена</div>
                        )}/>
                    </Switch>
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.authPage.isAuth,
        me: state.profilePage.me
    }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)