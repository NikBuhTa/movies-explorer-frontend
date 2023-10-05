import React from "react";
import WebPage from "../WebPage/WebPage";
import HeaderAuthForm from "../HeaderAuthForm/HeaderAuthForm";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
    return(
        <WebPage content={
            <>
                <HeaderAuthForm title='Добро пожаловать!'/>
                <AuthForm path='/signin' buttonText='Зарегистрироваться' spanText='Уже зарегистрированы?' linkText='Войти'/>
            </>
        }/>
    );
};

export default Register;