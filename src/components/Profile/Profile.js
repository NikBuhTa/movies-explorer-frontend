import React, { useState } from "react";
import HeaderAuthFilms from "../HeaderAuthFilms/HeaderAuthFilms";
import WebPage from "../WebPage/WebPage";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import SideBar from "../SideBar/SideBar";

function Profile() {
    const [isChange, setIsChange] = useState(false);
    const handleClick = () => {
        console.log(1)
        setIsChange(true);
    }
    return(
        <WebPage content={
            <>
                <SideBar />
                <HeaderAuthFilms />
                <section className="profile">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <form className="profile__form">
                        <div className="profile__container">
                            <label className="profile__label">Имя</label>
                            <input id="name" className="profile__input" type="text" value='NAME' required/>
                        </div>
                        <div className="profile__container">
                            <label className="profile__label">E-mail</label>
                            <input id="email" className="profile__input" type="email" value='EMAIL' required/>
                        </div>
                    </form>
                    {isChange ? 
                    <div className="profile__control-container">
                        <SpanTemplate className='profile__error' content='ERROR' />
                        <ButtonTemplate styles='profile__button-save' text='Сохранить' />
                    </div> :
                        <div className="profile__control-container">
                            <SpanTemplate className='profile__error' content='' />
                            <ButtonTemplate onClick={handleClick} styles='profile__button-edit' text='Редактировать' />
                            <ButtonTemplate styles='profile__button-exit' text='Выйти из&nbsp;аккаунта' />
                        </div>}
                </section>
            </>
        }/>
    );
}

export default Profile;