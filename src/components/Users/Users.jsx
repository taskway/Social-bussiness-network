import React from "react"
import s from "./Users.module.css"
import avatar from "../../assets/images/icon_avatar.svg"
import star from "../../assets/images/icon_rating.svg"
import noStar from "../../assets/images/icon_noRating.svg"
import noPhoto from "../../assets/images/icon_noPhoto.svg"
import IconShare from "../../assets/images/IconShare"
import IconMessages from "../../assets/images/IconMessages"
import IconMyFavorites from "../../assets/images/IconMyFavorites"
import {Link, NavLink} from "react-router-dom"

let Users = React.memo(({users, followingInProgress, follow, unfollow, isAuth}) => {
    return (
        <div className={s.users}>
            {users.map((u,i) =>
                <div className={s.user} key={i}>
                    <div className={s.options}>
                        <div className={s.avatar}>
                            <img src={avatar}/>
                        </div>
                        <div>
                            <div className={s.name}>{u.lastname} {u.name} {u.middlename}</div>
                            <div className={s.data}>
                                <div>{u.old} лет, {u.city}</div>
                                <div>{u.vocation}</div>
                                <div>
                                    {u.rating == 4
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
                                        <div>
                                            <img src={noStar}/>
                                            <img src={noStar}/>
                                            <img src={noStar}/>
                                            <img src={noStar}/>
                                            <img src={noStar}/>
                                            <div className={s.reviews}>Отзывы</div>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className={s.tasks}>
                                <div>Выполнил {u.completedTasks} заданий</div>
                                <div>Создал {u.createdTasks} заданий</div>
                            </div>
                            {/*<div>{u.photos.small}</div>*/}
                        </div>
                    </div>
                    {!(u.about_me)
                        ?
                        <div></div>
                        :
                        <div className={s.about_me}>
                            <div className={s.info}>{u.about_me}</div>
                        </div>
                    }
                    <div className={s.tape}>
                        <div><img src={noPhoto} alt=""/></div>
                        <div><img src={noPhoto} alt=""/></div>
                        <div><img src={noPhoto} alt=""/></div>
                    </div>
                    {isAuth
                        ?
                    <div className={s.buttons}>
                        <Link to={'/dialogs/' + u._id}>
                            <div className={s.containerButton}>
                                <IconMessages className="userButtons"/>
                                <div>Открыть диалог</div>
                            </div>
                        </Link>
                        {u.follow
                            ?
                        <button disabled={followingInProgress.some(id => id === u._id)} onClick={() => {unfollow(u._id);}}>
                            <div className={s.containerButton}>
                                <IconMyFavorites className="userButtons"/>
                                <div>Убрать из избранного</div>
                            </div>
                        </button>
                            :
                        <button  disabled={followingInProgress.some(id => id === u._id)} onClick={() => {follow(u._id);}}>
                            <div className={s.containerButton}>
                                <IconMyFavorites className="userButtons"/>
                                <div>Добавить в избранное</div>
                            </div>
                        </button>
                        }
                        <div className={s.containerButton}>
                            <IconShare className="userButtons"/>
                            <div>Поделиться</div>
                        </div>
                    </div>
                        :
                        <NavLink to="login"><div className={s.authMe}>Для взаимодействия с исполнителем, пожалуйста авторизируйтесь</div></NavLink>}
                </div>
            )}
        </div>
    )
})


export default Users