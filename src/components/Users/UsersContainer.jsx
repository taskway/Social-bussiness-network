import React from "react"
import Users from "./Users"
import {connect} from "react-redux"
import {follow,
        unfollow,
        toggleFollowingProgress,
        requestUsers} from '../../redux/users-reducer'
import {compose} from "redux"
import Preloader from "../common/Preloader/Preloader"
import {getUsers} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        console.log("RENDER")
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       isAuth={this.props.isAuth}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.authPage.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, requestUsers})
)(UsersContainer)