import React, { useEffect } from "react";
import WebPage from "../WebPage/WebPage";
import HeaderAuthForm from "../HeaderAuthForm/HeaderAuthForm";
import AuthForm from "../AuthForm/AuthForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login({onLogin, isDisabled, err}) {
    const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation({ email: '', password: ''});
    useEffect(() => {
        resetForm();
        setValues({
            email: '', password: ''
        })
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(values);
    }

    return(
        <WebPage content={
            <>
                <HeaderAuthForm title='Рады видеть!' />
                <main className="main">
                    <AuthForm buttonStyle='authform__login-button' path='/signup' buttonText='Войти' linkText='Регистрация' spanText='Еще не зарегистрированы?' isLogin={true}
                        onSubmit = {handleLogin}
                        onChange = {handleChange}
                        userData = {values}
                        vldProps = {{errors, isValid}}
                        isDisabled={isDisabled}
                        err={err}
                    />
                </main>
            </>
        } />
    );
};

export default Login;