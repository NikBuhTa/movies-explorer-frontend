import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutMeInfo from "../AboutMeInfo/AboutMeInfo";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return(
        <section className="aboutme">
                <SectionTitle text='Студент' />
                <AboutMeInfo />
                <Portfolio />
        </section>
    );
};

export default AboutMe;