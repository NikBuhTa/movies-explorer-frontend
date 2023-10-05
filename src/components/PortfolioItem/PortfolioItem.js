import React from "react";
import path from '../../images/link-icon.svg'
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function PortfolioItem({text}) {
    return(
        <li className="aboutme__portfolio-item">
            <SpanTemplate className='aboutme__portfolio-link link-active' content={ text } />
            <SpanTemplate className='aboutme__portfolio-link link-active' content={
                <img src={path} className="aboutme__portfolio-image" alt="link icon" />
            } />
        </li>
    );
};

export default PortfolioItem;