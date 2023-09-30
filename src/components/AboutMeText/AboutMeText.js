import React from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function AboutMeText(){
    return(
        <div className="aboutme__info">
            <h3 className="aboutme__title">
                <TitleTemplate text='Никита' />
            </h3>
            <h4 className="aboutme__subtitle">Фронтенд-разработчик, 23&nbsp;года</h4>
            <p className="aboutme__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена 
                и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;
                СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
            <SpanTemplate className='aboutme__link' text='Github' />
        </div>
    );
};

export default AboutMeText;