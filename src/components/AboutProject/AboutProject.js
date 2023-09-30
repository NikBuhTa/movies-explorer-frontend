import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ArticleInfo from "../ArticleInfo/ArticleInfo";
import TimeLine from "../TimeLine/TimeLine";

function AboutProject() {
    return(
        <section className="about-project">
            <SectionTitle text='О проекте' />
            <div className="about-project__descriptions">
                <ArticleInfo title='Дипломный проект включал 5&nbsp;этапов' text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.' />
                <ArticleInfo title='На&nbsp;выполнение диплома ушло 5&nbsp;недель' text='У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.' />
            </div>
            <TimeLine />
        </section>
    );
}

export default AboutProject;