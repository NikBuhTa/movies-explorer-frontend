import React from "react";
import ButtonTemplate from '../ButtonTemplate/ButtonTemplate'
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";


function AuthForm({buttonStyle = '', path, buttonText, spanText, linkText, isLogin, onSubmit, onChange, userData, vldProps, isDisabled, err}) {
    return(
        <section className="authform">
        
            <form className="form" onSubmit={onSubmit}>
                {isLogin ? '' : 
                <>
                    <label className="form__label">Имя</label>
                        <input className="form__input" name="name" type="text" onChange={onChange} value={userData?.name} required placeholder="Имя" minLength={2} maxLength={30}/>
                    <span className="form__error">{!vldProps.isValid && vldProps.errors.name}</span>
                </>}
                <label className="form__label">E-mail</label>
                    <input className="form__input" name="email" type="email" onChange={onChange} value={userData?.email} required placeholder="E-mail" minLength={2} maxLength={30}/>
                <span className="form__error">{!vldProps.isValid && vldProps.errors.email}</span>
                <label className="form__label">Пароль</label>
                    <input className="form__input" name="password" type="password" onChange={onChange} value={userData?.password} required placeholder="Пароль" minLength={2} maxLength={30}/>
                <span className="form__error">{!vldProps.isValid && vldProps.errors.password}</span>
                <span className={`form__error form__error_position_onbutton ${err ? 'form__error_login': ''}`}>{err ? 'Пользователь с таким email уже существует' : ''}</span>
                <ButtonTemplate isDisabled={isDisabled ? isDisabled : !vldProps.isValid} type='submit' styles={`${buttonStyle} authform__button`} text={buttonText}/>
            </form>
            <SpanTemplate className='authform__text' content={
                <LinkTemplate path={path} spanText={spanText} linkText={linkText} styles='authform__link' />
            }/>
        </section>
    );
};

export default AuthForm;