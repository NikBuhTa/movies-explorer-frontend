import React from "react";
import WebPage from "../WebPage/WebPage";
import HeaderAuthForm from "../HeaderAuthForm/HeaderAuthForm";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
    return(
        <WebPage content={
            <>
                <HeaderAuthForm title='Рады видеть!' />
                <AuthForm path='/signup' buttonText='Войти' linkText='Регистрация' spanText='Еще не зарегистрированы?' isLogin={true}/>
            </>
        } />
    );
};

export default Login;