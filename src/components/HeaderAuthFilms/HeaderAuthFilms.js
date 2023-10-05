import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function HeaderAuthFilms({isMovies = false, isSavedMovies = false}){
    return(
        <Header children={
            <>
              <Navigation children={
                <>
                  <SpanTemplate className={`${ isMovies ? 'nav__link-active' : ''} link-active nav__films-link`} content={
                    <LinkTemplate path='/movies' styles='link_color_black' linkText='Фильмы'/>
                  } />
                  <SpanTemplate className={`${isSavedMovies ? 'nav__link-active' : ''} nav__saved-films-link`} content={
                    <LinkTemplate path='/saved-movies' styles='link_color_black' linkText='Сохраненные фильмы' />
                  } />
                </>
              }/>
              <SpanTemplate className='header__account-link-films header__account-link' content={
                <LinkTemplate path='/profile' styles='link_color_black' linkText='Аккаунт' />
              }/>
            </>
          }
          specClass='header__location_films'
        />
    );
};

export default HeaderAuthFilms;