import React, { useState } from "react";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import WebPage from "../WebPage/WebPage";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [isChange, setIsChange] = useState(false);
    
    const navigate = useNavigate();
    
    const handleBtnEditClick = () => {
        setIsChange(true);
    }
    const handleBtnExitClick = () => {
        navigate('/', {replace: true});
    }
    return(
        <WebPage content={
            <>
                <SideBar />
                <HeaderAuthFilms />
                <main className="main">
                    <section className="profile">
                        <h1 className="profile__title">Привет, Виталий!</h1>
                        <form className="profile__form">
                            <div className="profile__container">
                                <label className="profile__label">Имя</label>
                                <input id="name" className="profile__input" type="text" value='NAME' required placeholder="Имя" minLength={2} maxLength={30}/>
                            </div>
                            <div className="profile__container">
                                <label className="profile__label">E-mail</label>
                                <input id="email" className="profile__input" type="email" value='EMAIL' required placeholder="E-mail" minLength={2} maxLength={30}/>
                            </div>
                        </form>
                        {isChange ? 
                        <div className="profile__control-container">
                            <SpanTemplate className='profile__error' content='ERROR' />
                            <ButtonTemplate type='submit' styles='profile__button-save' text='Сохранить' />
                        </div> :
                            <div className="profile__control-container">
                                <SpanTemplate className='profile__error' content='' />
                                <ButtonTemplate type="button" onClick={handleBtnEditClick} styles='profile__button-edit' text='Редактировать' />
                                <ButtonTemplate type='button' onClick={handleBtnExitClick} styles='profile__button-exit' text='Выйти из&nbsp;аккаунта' />
                            </div>}
                    </section>
                </main>
            </>
        }/>
    );
}

export default Profile;