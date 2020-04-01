import {dialogsAPI, usersAPI} from "../api/api"
import {setCurrentUser, toggleIsFetching} from "./users-reducer";
import {messagesAPI} from "../api/socket";

const SET_MESSAGES = 'SET_MESSAGES'
const SET_ROOM = 'SET_ROOM'

let initialState = {
    messages: [],
    room: null
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {...state, messages: action.messages}
        }
        case SET_ROOM: {
            return{...state, room: action.room}
        }
        default:
            return state
    }
}

export const setMessages = (messages) => ({type: SET_MESSAGES, messages})
export const setRoom = (room) => ({type: SET_ROOM, room})

export const requestMessagesAndCurrentUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    Promise.all([dialogsAPI.getMessages(userId), usersAPI.getCurrentUser(userId)]).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setMessages(data[0].messages))
        dispatch(setRoom(data[0].room))
        dispatch(setCurrentUser(data[1]))
    })
}

/*export const addMessage = (message, dialogId, userId, userName, currentUserId) => (dispatch) => {
    messagesAPI.addNewMessage(message, dialogId, userId, userName, currentUserId)
}*/

export default dialogsReducer