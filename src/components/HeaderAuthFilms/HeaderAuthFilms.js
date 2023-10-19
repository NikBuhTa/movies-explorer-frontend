import React, { useContext } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";
import { MobileSizeContext } from "../../contexts/MobileSizeContext";
import SideBarIcon from "../SideBarIcon/SideBarIcon";
import { useLocation } from "react-router-dom";

function HeaderAuthFilms(){
  const {isTabSize} = useContext(MobileSizeContext);
  const location = useLocation();
  return(
    <Header children={
        <>
          {isTabSize ? 
          <SideBarIcon styles='header__sidebar-span_color_black' /> : 
          <>
            <Navigation styles='nav_position_header' children={
              <>
                <SpanTemplate className={`${ location.pathname === '/movies' ? 'nav__link-active' : ''} link-active nav__films-link`} content={
                  <LinkTemplate path='/movies' styles='link_color_black' linkText='Фильмы'/>
                } />
                <SpanTemplate className={`${ location.pathname === '/saved-movies' ? 'nav__link-active' : ''} nav__saved-films-link`} content={
                  <LinkTemplate path='/saved-movies' styles='link_color_black' linkText='Сохраненные фильмы' />
                } />
              </>
            }/>
            <SpanTemplate className='header__account-link-films header__account-link' content={
              <LinkTemplate path='/profile' styles='link_color_black' linkText='Аккаунт' />
            }/>
          </>}
        </>
      }
      specClass='header__location_films'
    />
  );
};

export default HeaderAuthFilms;