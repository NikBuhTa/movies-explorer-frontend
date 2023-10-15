import React, { useEffect } from "react";
import WebPage from "../WebPage/WebPage";
import HeaderAuthForm from "../HeaderAuthForm/HeaderAuthForm";
import AuthForm from "../AuthForm/AuthForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useNavigate } from "react-router-dom";

function Register({onRegister, isDisabled}) {
    const { values, handleChange, errors, isValid, resetForm, setValues } = useFormAndValidation({ email: '', password: '', name: '' });

    useEffect(() => {
        resetForm();
        setValues({
            email: '', password: '', name: ''
        })
    }, [])

    const handleReg = (e) => {
        e.preventDefault();
        onRegister(values);
    }

    return(
        <WebPage content={
            <>
                <HeaderAuthForm title='Добро пожаловать!'/>
                <main className="main">
                    <AuthForm path='/signin' buttonText='Зарегистрироваться' spanText='Уже зарегистрированы?' linkText='Войти'
                        onSubmit = {handleReg}
                        onChange = {handleChange}
                        userData = {values}
                        vldProps = {{errors, isValid}}
                        isDisabled={isDisabled}
                    />
                </main>
            </>
        }/>
    );
};

export default Register;