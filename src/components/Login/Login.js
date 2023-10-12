import React, { useEffect } from "react";
import WebPage from "../WebPage/WebPage";
import HeaderAuthForm from "../HeaderAuthForm/HeaderAuthForm";
import AuthForm from "../AuthForm/AuthForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useNavigate } from "react-router-dom";

function Login({onLogin}) {
    const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation({ email: '', password: ''});
    const navigate = useNavigate();

    useEffect(() => {
        resetForm();
        setValues({
            email: '', password: ''
        })
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(values);
        navigate('/movies', {replace: true})
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
                    />
                </main>
            </>
        } />
    );
};

export default Login;