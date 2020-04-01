import {usersAPI} from "../api/api"

const SET_USERS = 'SET_USERS'
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    currentUser: null,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_USER: {
            return {...state, user: action.currentUser}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentUser = (currentUser) => ({type: SET_CURRENT_USER, currentUser})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = () => (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers().then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data))
        })
}

export const requestCurrentUser = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getCurrentUser(userId).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setCurrentUser(data))
    })
}

export const follow = (userId) => (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(data => {
            if (data === "success") {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

export const unfollow = (userId) => (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data === "success") {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
}

export default usersReducer;