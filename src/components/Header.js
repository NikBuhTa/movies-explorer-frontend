import React from "react";
import logo from '../images/logo.svg'

function Header({children}) {
    return(
        <header className="header">
            <img src={ logo } className="header__logo" alt="лого приложения" />
            {children}
        </header>
    );

}

export default Header;