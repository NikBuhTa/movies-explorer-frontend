import React from "react";
import logo from '../../images/logo.svg'
import LinkTemplate from "../LinkTemplate/LinkTemplate";

function HeaderAuthForm({title}) {
    return(
        <header className="authheader">
                <LinkTemplate path='/' styles='authheader__image' linkText={<img src={ logo } alt="лого приложения"/>} /> 
                <h1 className="authheader__title">{title}</h1>
        </header>
    )
};

export default HeaderAuthForm;