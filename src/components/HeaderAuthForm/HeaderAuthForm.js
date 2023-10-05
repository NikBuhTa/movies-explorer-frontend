import React from "react";
import logo from '../../images/logo.svg'
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function HeaderAuthForm({title}) {
    return(
        <header className="authheader">
            <div className="authheader__container">
                <LinkTemplate path='/' linkText={<img src={ logo } className='authheader__image' alt="лого приложения"/>} /> 
                <h1 className="authheader__title">{title}</h1>
            </div>
        </header>
    )
};

export default HeaderAuthForm;