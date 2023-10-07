import React from "react";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import Header from "../Header/Header";
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function HeaderNoAuth(){
    return(
        <Header children={
            <Navigation styles='nav__noauth' children={
                <>
                  <SpanTemplate className='nav__reg-link' content={
                    <LinkTemplate path='/signup' styles='link_color_white' linkText='Регистрация' />
                  } />
                  <SpanTemplate className='nav__log-link' content={
                    <LinkTemplate path='/signin' styles='link_color_black' linkText='Войти' />
                  } />
                </>
              }/>
        }
        specClass='noauthheader' />
    );
};

export default HeaderNoAuth;