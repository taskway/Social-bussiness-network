import {setAboutMe, setMe} from "./profile-reducer"
import {setUsers, toggleIsFetching} from "./users-reducer"
import {usersAPI} from "../api/api";
import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => async(dispatch) => {
    dispatch(toggleIsFetching(true))
    Promise.all([usersAPI.getUsers(), usersAPI.getMe(), usersAPI.getAboutMe()]).then(promise => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(promise[0]))
        if(promise[1].resultCode === 0) {
            dispatch(setMe(promise[1].user))
        }
        if(promise[2].resultCode === 0) {
            dispatch(setAboutMe(promise[2].aboutUser))
            dispatch(authMe(true))
        }
        dispatch(initializedSuccess())
    })
}


export default appReducer