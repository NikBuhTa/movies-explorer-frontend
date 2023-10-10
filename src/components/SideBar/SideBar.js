import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import path from '../../images/close.svg';
import { SideBarContext } from "../../contexts/SideBarContext";
import { NavParamsContext } from "../../contexts/NavParamsContext";

function SideBar() {
    const {isSideBar, toggleSideBar} = useContext(SideBarContext);
    const {isMain, isMovies, isSavedMovies, handleLeaveMovies, handleLeaveSavedMovies, handleMoveToMovies, handleMoveToSavedMovies, handleLeaveMain, handleMoveToMain} = useContext(NavParamsContext);

    const onClose = () => {
        toggleSideBar();
    }

    return(
        <div className={`${isSideBar ? 'sidebar__active' : ''} sidebar`}>
            <div className="sidebar__container">
              <ButtonTemplate type="button" onClick={onClose} styles='sidebar__close-button' text={
                  <img src={path} className="sidebar__button-img" alt="иконка закрытия"/>
              } />
              <Navigation styles="nav_position_sidebar" children={
                    <>
                      <SpanTemplate onClick={() => {
                        handleLeaveMovies();
                        handleLeaveSavedMovies();
                        handleMoveToMain();
                      }} className={`${ isMain ? 'nav__link-active' : ''} link-active nav__saved-films-link nav__films-link_position_sidebar`} content={
                        <LinkTemplate path='/' styles='link_color_black' linkText='Главная' />
                      } />
                      <SpanTemplate onClick={() => {
                        handleMoveToMovies();
                        handleLeaveSavedMovies();
                        handleLeaveMain();
                      }} className={`${ isMovies ? 'nav__link-active' : ''} link-active nav__films-link nav__films-link_position_sidebar`} content={
                        <LinkTemplate path='/movies' styles='link_color_black' linkText='Фильмы'/>
                      } />
                      <SpanTemplate onClick={() => {
                        handleMoveToSavedMovies();
                        handleLeaveMovies();
                        handleLeaveMain();
                      }} className={`${ isSavedMovies ? 'nav__link-active' : ''} link-active nav__saved-films-link nav__films-link_position_sidebar`} content={
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
            </div>
        </div>
    )
};

export default SideBar;