import React from "react";
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate'
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function AuthForm({buttonStyle = '', path, buttonText, spanText, linkText, isLogin}) {
    return(
        <section className="authform">
        
            <form className="form">
                {isLogin ? '' : 
                <>
                    <label className="form__label">Имя</label>
                        <input className="form__input" type="text" required placeholder="Имя" minLength={2} maxLength={30}/>
                    <span className="form__error"></span>
                </>}
                <label className="form__label">E-mail</label>
                    <input className="form__input" type="email" required placeholder="E-mail" minLength={2} maxLength={30}/>
                <span className="form__error"></span>
                <label className="form__label">Пароль</label>
                    <input className="form__input" type="password" required placeholder="Пароль" minLength={2} maxLength={30}/>
                <span className="form__error">Ошибка!</span>
            </form>
            <ButtonTemplate type='submit' styles={`${buttonStyle} authform__button`} text={buttonText}/>
            <SpanTemplate className='authform__text' content={
                <LinkTemplate path={path} spanText={spanText} linkText={linkText} styles='authform__link' />
            }/>
        </section>
    );
};

export default AuthForm;