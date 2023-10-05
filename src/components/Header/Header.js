import React from "react";
import logo from '../../images/logo.svg'
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function Header({children, specClass}) {
    return(
        <header className={ specClass ? `${ specClass } header` : 'header' }>
            <LinkTemplate path='/' linkText={<img src={ logo } className='header__logo' alt="лого приложения"/>} />
            {children}
        </header>
    );

}

export default Header;