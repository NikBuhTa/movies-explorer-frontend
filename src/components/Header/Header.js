import React, { useContext } from "react";
import logo from '../../images/logo.svg'
import LinkTemplate from "../LinkTemplate/LinkTemplate";
import { NavParamsContext } from "../../contexts/NavParamsContext";

function Header({children, specClass}) {
    const {handleLeaveMovies, handleLeaveSavedMovies, handleMoveToMovies, handleMoveToSavedMovies, handleLeaveMain, handleMoveToMain} = useContext(NavParamsContext);

    return(
        <header className={ specClass ? `${ specClass } header` : 'header' }>
            <LinkTemplate path='/' styles='header__logo' linkText={<img onClick={() =>{
                handleLeaveMovies();
                handleLeaveSavedMovies();
                handleMoveToMain();
            }} src={ logo } alt="лого приложения"/>} />
            {children}
        </header>
    );

}

export default Header;