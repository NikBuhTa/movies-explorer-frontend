import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__year">
                    &copy;&nbsp;2023
                </p>
                <ul className="footer__links">
                    <li className="footer__link">
                        Яндекс.Практикум
                    </li>
                    <li className="footer__link">
                        Github 
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;