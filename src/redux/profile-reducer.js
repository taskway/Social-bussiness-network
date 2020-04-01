import {usersAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";
import {authMe} from "./auth-reducer";

const SET_ME = 'SET_ME';
const SET_FOLLOW_USERS = 'SET_FOLLOW_USERS';
const SET_ABOUT_ME = "SET_ABOUT_ME";

let initialState = {
    me: [],
    followUsers: [],
    aboutMe: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ME: {
            return {...state, me: action.me}
        }
        case SET_ABOUT_ME: {
            return {...state, aboutMe: action.aboutMe}
        }
        case SET_FOLLOW_USERS: {
            return {...state, followUsers: action.followUsers}
        }
        default:
            return state;
    }
}

export const setMe = (me) => ({type: SET_ME, me})
export const setAboutMe = (aboutMe) => ({type: SET_ABOUT_ME, aboutMe})
export const setFollowUsers = (followUsers) => ({type: SET_FOLLOW_USERS, followUsers})

export const getMe = () => (dispatch) => {
        dispatch(toggleIsFetching(true))
        return usersAPI.getMe().then(data => {
            if(data.resultCode === 0) {
                dispatch(setMe(data.user))
                dispatch(authMe(true))
            }
                dispatch(toggleIsFetching(false))
        })
}

export const getAboutMe = () => (dispatch) => {
        return usersAPI.getAboutMe().then(data => {
            if(data.resultCode === 0) {
                dispatch(setAboutMe(data.aboutUser))
            }
        })
}

export const updateAboutMe = (aboutMe) => (dispatch) => {
        usersAPI.updateAboutMe(aboutMe)
            .then(data => {
                dispatch(setAboutMe(data))
            })
}

export const getFollowUsers = () => (dispatch) => {
        usersAPI.getFollowUsers().then(data => {
            dispatch(setFollowUsers(data))
        })
}

export default profileReducer;