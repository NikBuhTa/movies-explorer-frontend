import React from "react";
import TitleTemplate from "../TitleTemplate/TitleTemplate";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function AboutMeText(){
    return(
        <div className="aboutme__info">
            <h3 className="aboutme__title">Виталий</h3>
            <h4 className="aboutme__subtitle">Фронтенд-разработчик, 30&nbsp;лет</h4>
            <p className="aboutme__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена 
и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании 
&laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
            <a href="https://github.com/NikBuhTa" className='aboutme__link link-active' target="_blank" >Github</a>
        </div>
    );
};

export default AboutMeText;