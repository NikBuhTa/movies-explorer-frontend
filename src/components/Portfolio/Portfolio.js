import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

function Portfolio() {
    return(
        <div className="aboutme__portfolio">
            <h3 className="aboutme__portfolio-title">Портфолио</h3>
            <ul className="aboutme__portfolio-list">
                <PortfolioItem text='Статичный сайт'/>
                <PortfolioItem text='Адаптивный сайт'/>
                <PortfolioItem text='Одностраничное приложение'/>
            </ul>
        </div>
    );
};

export default Portfolio;