import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";
import path from '../../images/close.svg';
import { SideBarContext } from "../../contexts/SideBarContext";
import { useLocation } from "react-router-dom";

function SideBar() {
    const {isSideBar, toggleSideBar} = useContext(SideBarContext);
    const location = useLocation();
    const onClose = () => {
        toggleSideBar();
    }

    return(
        <div className={`${isSideBar ? 'sidebar__active' : ''} sidebar`}>
            <div className="sidebar__container">
              <ButtonTemplate isDisabled={false} type="button" onClick={onClose} styles='sidebar__close-button' text={
                  <img src={path} className="sidebar__button-img" alt="иконка закрытия"/>
              } />
              <Navigation styles="nav_position_sidebar" children={
                    <>
                      <SpanTemplate className={`${ location.pathname === '/' ? 'nav__link-active' : ''} link-active nav__saved-films-link nav__films-link_position_sidebar`} content={
                        <LinkTemplate path='/' styles='link_color_black' linkText='Главная' />
                      } />
                      <SpanTemplate className={`${ location.pathname === '/movies' ? 'nav__link-active' : ''} link-active nav__films-link nav__films-link_position_sidebar`} content={
                        <LinkTemplate path='/movies' styles='link_color_black' linkText='Фильмы'/>
                      } />
                      <SpanTemplate className={`${ location.pathname === '/saved-movies' ? 'nav__link-active' : ''} link-active nav__saved-films-link nav__films-link_position_sidebar`} content={
                        <LinkTemplate path='/saved-movies' styles='link_color_black' linkText='Сохраненные фильмы' />
                      } />
                    </>
                  }/>
                  <SpanTemplate className='header__account-link-films header__account-link' content={
                    <LinkTemplate path='/profile' styles='link_color_black' linkText='Аккаунт' />
                  }/>
            </div>
        </div>
    )
};

export default SideBar;