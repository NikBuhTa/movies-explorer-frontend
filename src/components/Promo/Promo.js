import React from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import path from '../../images/promo.svg';

function Promo() {
    return(
        <section className="promo">
            <img src={path} className="promo__image" alt='промо' />
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    );
}

export default Promo;