import React, { useContext, useEffect, useState } from "react";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import WebPage from "../WebPage/WebPage";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import SideBar from "../SideBar/SideBar";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({onLogout, onUpdate, err, isOk, setIsOk, isDisabled, handleCheckData}) {
    const currentUser = useContext(CurrentUserContext);

    const { values, handleChange, errors, isValid, resetForm, setValues, setIsValid } = useFormAndValidation({ name: '', email: ''});
    const [isChange, setIsChange] = useState(false);

    const handleBtnEditClick = (e) => {
        e.preventDefault();
        setIsChange(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(values);
    }

    useEffect(() => {
        handleCheckData(values);
    }, [values])

    useEffect(() => {
        resetForm();
        setValues({
            name: currentUser.name || '', email: currentUser.email || ''
        })
        setIsValid(true);
        return () => {
            setIsOk(false)
        }
    }, [])
    return(
        <WebPage content={
            <>
                <SideBar />
                <HeaderAuthFilms />
                <main className="main">
                    <section className="profile">
                        <h1 className="profile__title">Привет, {currentUser?.name}!</h1>
                        <form className="profile__form" >
                            <div className="profile__container">
                                <label className="profile__label">Имя</label>
                                <input id="name" className="profile__input" name="name" type="text" onChange={handleChange} value={values?.name} required placeholder="Имя" minLength={2} maxLength={30}/>
                            </div>
                            <span className="form__error">{!isValid && errors.name}</span>
                            <div className="profile__container">
                                <label className="profile__label">E-mail</label>
                                <input id="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" className="profile__input" name="email" type="email" onChange={handleChange} value={values?.email} required placeholder="E-mail" minLength={2} maxLength={30}/>
                            </div>
                            <span className="form__error">{!isValid && errors.email}</span>
                        {isChange ? 
                        <div className="profile__control-container">
                            {isOk
                            ? <SpanTemplate className='profile__ok' content={'Данные успешно изменены'} />
                            : <SpanTemplate className='profile__error' content={err.status !== undefined ? `${err.status} ${err.text}` : ''} />}
                            <ButtonTemplate isDisabled={isDisabled ? isDisabled : !isValid} type='submit' onClick={handleSubmit} styles='profile__button-save' text='Сохранить' />
                        </div> :
                            <div className="profile__control-container">
                                <SpanTemplate className='profile__error' content='' />
                                <ButtonTemplate isDisabled={false} type='button' onClick={handleBtnEditClick} styles='profile__button-edit' text='Редактировать' />
                                <ButtonTemplate isDisabled={false} type='submit' onClick={onLogout} styles='profile__button-exit' text='Выйти из&nbsp;аккаунта' />
                            </div>}
                        </form>
                    </section>
                </main>
            </>
        }/>
    );
}

export default Profile;