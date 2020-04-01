import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAboutMe, getMe} from "./profile-reducer";
import {requestUsers} from "./users-reducer";
const AUTH_ME = "AUTH_ME";

let initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME: {
            return {...state, isAuth: action.isAuth}
        }
        default:
            return state;
    }
}

export const authMe = (isAuth) => ({type: AUTH_ME, isAuth})

export const login = (email, password) => (dispatch) => {
    usersAPI.login(email, password).then(data => {
        if (data.resultCode === 0) {
            dispatch(authMe(true))
            dispatch(getMe())
            dispatch(getAboutMe())
            dispatch(requestUsers())
        } else {
            dispatch(stopSubmit("login", {_error: data.error}));
        }
    })
}

export const logout = () => (dispatch) => {
    usersAPI.logout().then(data => {
        dispatch(authMe(false))
        dispatch(requestUsers())
    })
}


export default authReducer;