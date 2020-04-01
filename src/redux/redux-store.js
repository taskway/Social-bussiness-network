import {applyMiddleware, combineReducers, createStore} from "redux";
import taskReducer from "./tasks-reducer";
import usersReducer from "./users-reducer";
import companyReducer from "./company-reducer";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import {reducer as formReducer} from 'redux-form';
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import {compose} from "redux";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    taskPage: taskReducer,
    copmanyPage: companyReducer,
    authPage: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

/*let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;*/

export default store;