import React from "react";
import logo from '../../images/logo.svg'

function Header({children, specClass}) {
    return(
        <header className={ specClass ? `${ specClass } header` : 'header' }>
            <img src={ logo } className='header__logo' alt="лого приложения" />
            {children}
        </header>
    );

}

export default Header;