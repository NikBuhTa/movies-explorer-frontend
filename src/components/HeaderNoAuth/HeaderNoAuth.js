import React from "react";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import Header from "../Header/Header";

function HeaderNoAuth(){
    return(
        <Header children={
            <Navigation children={
                <>
                  <SpanTemplate className='nav__reg-link' text='Регистрация' />
                  <SpanTemplate className='nav__log-link' text='Войти' />
                </>
              }/>
        } />
    );
};

export default HeaderNoAuth;