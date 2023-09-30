import React from "react";
import path from '../../images/link-icon.svg'
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function PortfolioItem({text}) {
    return(
        <li className="aboutme__portfolio-item">
            <SpanTemplate className='aboutme__portfolio-link' text={ text } />
            <SpanTemplate className='aboutme__portfolio-link' text={
                <img src={path} alt="link icon" />
            } />
        </li>
    );
};

export default PortfolioItem;