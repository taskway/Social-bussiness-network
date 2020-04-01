import React from "react"
import s from "./AboutProfile.module.css"

class AboutProfile extends React.Component {
    state = {
        editMode: false,
        aboutMe: this.props.aboutMe
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateAboutMe(this.state.aboutMe)
    }
    onAboutMeChange = (e) => {
        this.setState({
            aboutMe: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.aboutMe !== this.props.aboutMe) {
            this.setState({
                aboutMe: this.props.aboutMe
            })
        }
    }

    render() {
        return (
            <div className={s.aboutMe}>
                {!this.state.editMode &&
                    <div className={this.props.aboutMe || s.default}>
                        <span onClick={this.activateEditMode}>{this.props.aboutMe || "Добавить информацию о себе"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea onChange={this.onAboutMeChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.aboutMe}/>
                    </div>
                }
            </div>
        )
    }
}

export default AboutProfile;