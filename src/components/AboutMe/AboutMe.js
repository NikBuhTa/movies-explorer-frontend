import React, { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutMeInfo from "../AboutMeInfo/AboutMeInfo";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = React.forwardRef((props, ref) => {
    return(
        <section ref={ref} id="aboutMe" className="aboutme">
                <SectionTitle text='Студент' />
                <AboutMeInfo />
                <Portfolio />
        </section>
    );
});

export default AboutMe;