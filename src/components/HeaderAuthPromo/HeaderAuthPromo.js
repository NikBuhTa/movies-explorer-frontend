import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function HeaderAuthPromo({}) {
    return(
        <Header children={
            <>
              <Navigation children={
                <>
                  <SpanTemplate className='nav__films-link' text='Фильмы' />
                  <SpanTemplate className='nav__saved-films-link' text='Сохраненные фильмы' />
                </>
              }/>
              <SpanTemplate className='header__account-link-promo header__account-link' text='Аккаунт'/>
            </>
        }
        />
    );
}

export default HeaderAuthPromo;