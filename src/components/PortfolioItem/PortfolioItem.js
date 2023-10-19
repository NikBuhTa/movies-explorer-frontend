import React from "react";
import path from '../../images/link-icon.svg'
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function PortfolioItem({link, text}) {
    return(
        <li className="aboutme__portfolio-item">
            <a href={link} className='aboutme__portfolio-link link-active' target="_blank">
                {text}
                <span className="aboutme__portfolio-link-text link-active">↗</span>
            </a>
        </li>
    );
};

export default PortfolioItem;