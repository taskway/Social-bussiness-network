import React from 'react'
import {connect} from 'react-redux'
import {requestMessagesAndCurrentUserData, setMessages, setRoom} from "../../redux/dialogs-reducer";
import Dialog from "./Dialog";
import {Redirect, withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

class DialogsContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.requestMessagesAndCurrentUserData(userId)
    }

    componentWillUnmount() {
        this.props.setMessages()
        this.props.setRoom(null)
    }

    render() {
        if(!this.props.isAuth) {
            return <Redirect to="/login"/>
        }
        return (
            <>
            { this.props.isFetching ? <Preloader /> : null }
            { this.props.room && this.props.currentUser ? <Dialog
                roomMessages={this.props.roomMessages}
/*                addMessage={this.props.addMessage}*/
                room={this.props.room}
                me={this.props.me}
                currentUser={this.props.currentUser}
                setRoom={this.props.setRoom}/> : null }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        roomMessages: state.dialogsPage.messages,
        isFetching: state.usersPage.isFetching,
        room: state.dialogsPage.room,
        currentUser: state.usersPage.user,
        me: state.profilePage.me,
        isAuth: state.authPage.isAuth
    }
}

let withUrlDataContainerComponent = withRouter(DialogsContainer)

export default connect(mapStateToProps, {requestMessagesAndCurrentUserData, setMessages, setRoom})(withUrlDataContainerComponent)