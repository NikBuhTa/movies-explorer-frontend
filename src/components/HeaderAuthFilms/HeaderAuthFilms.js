import React, { useContext } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";
import { MobileSizeContext } from "../../contexts/MobileSizeContext";
import SideBarIcon from "../SideBarIcon/SideBarIcon";
import { NavParamsContext } from "../../contexts/NavParamsContext";

function HeaderAuthFilms(){
  const isMobileSize = useContext(MobileSizeContext);
  const {isMain, isMovies, isSavedMovies, handleLeaveMovies, handleLeaveSavedMovies, handleMoveToMovies, handleMoveToSavedMovies, handleLeaveMain, handleMoveToMain} = useContext(NavParamsContext);

  return(
    <Header children={
        <>
          {isMobileSize ? 
          <SideBarIcon styles='header__sidebar-span_color_black' /> : 
          <>
            <Navigation styles='nav_position_header' children={
              <>
                <SpanTemplate onClick={() => {
                  handleMoveToMovies();
                  handleLeaveSavedMovies();
                  handleLeaveMain();
                }} className={`${ isMovies ? 'nav__link-active' : ''} link-active nav__films-link`} content={
                  <LinkTemplate path='/movies' styles='link_color_black' linkText='Фильмы'/>
                } />
                <SpanTemplate onClick={() => {
                  handleMoveToSavedMovies();
                  handleLeaveMovies();
                  handleLeaveMain();
                }} className={`${isSavedMovies ? 'nav__link-active' : ''} nav__saved-films-link`} content={
                  <LinkTemplate path='/saved-movies' styles='link_color_black' linkText='Сохраненные фильмы' />
                } />
              </>
            }/>
            <SpanTemplate onClick={() => {
                  handleLeaveMain();
                  handleLeaveMovies();
                  handleLeaveSavedMovies();
                }} className='header__account-link-films header__account-link' content={
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