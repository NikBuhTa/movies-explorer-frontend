import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

function Portfolio() {
    return(
        <div className="aboutme__portfolio">
            <h3 className="aboutme__portfolio-title">Портфолио</h3>
            <ul className="aboutme__portfolio-list">
                <PortfolioItem link='https://github.com/NikBuhTa/how-to-learn' text='Статичный сайт'/>
                <PortfolioItem link='https://github.com/NikBuhTa/russian-travel' text='Адаптивный сайт'/>
                <PortfolioItem link='https://github.com/NikBuhTa?tab=repositories' text='Одностраничное приложение'/>
            </ul>
        </div>
    );
};

export default Portfolio;