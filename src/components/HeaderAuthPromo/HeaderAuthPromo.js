import React, { useContext } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SpanTemplate from "../SpanTemplate/SpanTemplate";
import LinkTemplate from "../LinkTemplate/LinkTemplate";
import { MobileSizeContext } from "../../contexts/MobileSizeContext";
import SideBarIcon from "../SideBarIcon/SideBarIcon";

function HeaderAuthPromo({}) {
  const {isTabSize} = useContext(MobileSizeContext);

  return(
        <Header children={
            <>
              {isTabSize ? 
              <SideBarIcon styles='header__sidebar-span_color_white' />:
              <>
                <Navigation styles="nav_position_header" children={
                  <>
                    <SpanTemplate className={`link-active nav__films-link`} content={
                      <LinkTemplate path='/movies' styles='link_color_white' linkText='Фильмы'/>
                    } />
                    <SpanTemplate className={`link-active nav__saved-films-link`} content={
                      <LinkTemplate path='/saved-movies' styles='link_color_white' linkText='Сохраненные фильмы' />
                    } />
                  </>
                }/>
                <SpanTemplate className='header__account-link-films header__account-link' content={
                  <LinkTemplate path='/profile' styles='link_color_black' linkText='Аккаунт' />
                }/>
              </>
              }
            </>
        }
        />
    );
}

export default HeaderAuthPromo;