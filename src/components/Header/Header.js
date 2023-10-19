import React, { useContext } from "react";
import logo from '../../images/logo.svg'
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function Header({children, specClass}) {

    return(
        <header className={ specClass ? `${ specClass } header` : 'header' }>
            <LinkTemplate path='/' styles='header__logo' linkText={<img src={ logo } alt="лого приложения"/>} />
            {children}
        </header>
    );

}

export default Header;