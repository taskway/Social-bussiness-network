import React from "react";
import s from "./FormControls.module.css";

export const FormControl = ({input, meta, child, ...props}) => {

    const hasError = meta.error && meta.touched;
    if (meta.error == "Field required") {
        meta.error = "Поле не заполнено";
    }

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {props.children}
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}