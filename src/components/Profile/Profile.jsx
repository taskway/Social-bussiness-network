import React from "react";
import s from "./Profile.module.css"
import avatar from "../../assets/images/icon_avatar.svg"
import star from "../../assets/images/icon_rating.svg"
import noStar from "../../assets/images/icon_noRating.svg"
import noPhoto from "../../assets/images/icon_noPhoto.svg"
import IconMessages from "../../assets/images/IconMessages"
import IconTasks from "../../assets/images/IconTasks"
import IconCompany from "../../assets/images/IconCompany"
import IconMyFavorites from "../../assets/images/IconMyFavorites"
import AboutProfileHooks from "./ProfileInfo/AboutProfileHooks"
import {NavLink} from "react-router-dom"


let Profile = React.memo(props => {
    return (
        <div className={s.profile}>
            <div className={s.user}>
                <div className={s.options}>
                    <div className={s.avatar}>
                        <div className={s.content}>
                            <img src={avatar}/>
                            <div className={s.upload}>Загрузить аватар</div>
                        </div>
                    </div>
                    <div>
                        <div className={s.name}>{props.me.lastname} {props.me.name} {props.me.middlename}</div>
                        <div className={s.data}>
                            <div>{props.me.old} лет, {props.me.city}</div>
                            <div>{props.me.vocation}</div>
                            <div>
                                {props.me.rating = 4
                                    ?
                                    <div>
                                        <img src={star}/>
                                        <img src={star}/>
                                        <img src={star}/>
                                        <img src={star}/>
                                        <img src={noStar}/>
                                        <div className={s.reviews}>Отзывы</div>
                                    </div>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div className={s.tasks}>
                            <div>Выполнил {props.me.completedTasks} заданий</div>
                            <div>Создал {props.me.createdTasks} заданий</div>
                        </div>
                        {/*<div>{u.photos.small}</div>*/}
                    </div>
                </div>
                <div className={s.about_me}>
                    {/*<div className={s.info}>{props.me.about_me}</div>*/}
                    <AboutProfileHooks aboutMe={props.aboutMe} updateAboutMe={props.updateAboutMe}/>
                </div>
                <div className={s.tape}>
                    <div><img src={noPhoto} alt=""/></div>
                    <div><img src={noPhoto} alt=""/></div>
                    <div><img src={noPhoto} alt=""/></div>
                </div>
                <div className={s.buttons}>
                    <NavLink to="dialogs">
                        <div>
                            <IconMessages className="userButtons"/>
                            <div>Мои диалоги</div>
                        </div>
                    </NavLink>
                    <div>
                        <IconTasks className="userButtons"/>
                        <div>Мои задания</div>
                    </div>
                    <div>
                        <IconCompany className="userButtons"/>
                        <div>Мои компании</div>
                    </div>
                    <div>
                        <IconMyFavorites className="userButtons"/>
                        <div>Избранное</div>
                    </div>
                </div>
            </div>
            {/*            {props.followUsers.map(u =>
                <div className={s.name}>{u.name}</div>
            )}*/}
            <button className={s.logout} onClick={props.logout}>Log out</button>
        </div>
    )
})

export default Profile;