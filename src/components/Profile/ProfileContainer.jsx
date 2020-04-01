import React from "react"
import {connect} from "react-redux"
import {getAboutMe, /*getFollowUsers,*/ getMe, updateAboutMe} from "../../redux/profile-reducer"
import {compose} from "redux"
import Profile from "./Profile"
import Preloader from "../common/Preloader/Preloader"
import {Redirect} from "react-router-dom"
import {logout} from "../../redux/auth-reducer"

class ProfileContainer extends React.Component {
    componentDidMount() {
        /*this.props.getFollowUsers()*/
        if(!this.props.isAuth) {
            this.props.getMe()
            this.props.getAboutMe()
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        console.log("RENDER")
        if(!this.props.isAuth) {
            return <Redirect to="/login"/>
        }
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Profile me={this.props.me}
                             /*followUsers={this.props.followUsers}*/
                             aboutMe={this.props.aboutMe}
                             updateAboutMe={this.props.updateAboutMe}
                             logout={this.props.logout}/>

                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        me: state.profilePage.me,
        aboutMe: state.profilePage.aboutMe,
        isFetching: state.usersPage.isFetching,
        /*followUsers: state.profilePage.followUsers,*/
        isAuth: state.authPage.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getMe, getAboutMe, /*getFollowUsers,*/ updateAboutMe, logout})
)(ProfileContainer)