import React, {useState,useEffect} from "react"
import s from "./AboutProfile.module.css"


const AboutProfileHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [aboutMe, setAboutMe] = useState(props.aboutMe)

    useEffect( () => {
        setAboutMe(props.aboutMe)
    }, [props.aboutMe])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateAboutMe(aboutMe)
    }

    const onAboutMeChange = (e) => {
        setAboutMe(e.currentTarget.value)
    }

    useState(false);

        return (
            <div className={s.aboutMe}>
                {!editMode &&
                    <div className={props.aboutMe || s.default}>
                        <span onClick={activateMode}>{aboutMe || "Добавить информацию о себе"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <textarea onChange={onAboutMeChange}
                                  onBlur={deactivateMode}
                                  autoFocus={true}
                                  value={aboutMe}/>
                    </div>
                }
            </div>
        )
}

export default AboutProfileHooks