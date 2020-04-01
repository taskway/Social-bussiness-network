import React from "react"
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validator/validators";
import {Input} from "../common/FormControls/FormControls";

const LoginForm = (props) => {
    return (
        <div className={s.login}>
            <h1>Вход</h1>
            <form onSubmit={props.handleSubmit}>
                <div className={props.error && s.hasError}>
                    <div>
                        <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
                    </div>
                    <div>
                        <Field placeholder={"Пароль"} name={"password"} component={Input} validate={[required]} type="password"/>
                    </div>
                        </div>
                <div className={s.summaryError}>
                    {props.error}
                </div>
                <div>
                    <button>Войти</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);