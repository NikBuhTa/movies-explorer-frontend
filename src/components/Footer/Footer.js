import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__year">
                    &copy;&nbsp;2020
                </p>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href='https://practicum.yandex.ru/' className="footer__internal-link link-active" target="_blank">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__link">
                        <a href='https://github.com/' className="footer__internal-link link-active" target="_blank" >Github</a> 
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;