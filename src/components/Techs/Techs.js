import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import TechsList from "../TechsList/TechsList";

const Techs = React.forwardRef((props, ref) => {
    return(
        <section ref={ref} id="techs" className="techs">
            <SectionTitle text='Технологии' />
            <div className="techs__container">
                <h2 className="techs__title">
                    7&nbsp;технологий
                </h2>
                <p className="techs__text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
                <TechsList />
            </div>
        </section>
    );
});

export default Techs;