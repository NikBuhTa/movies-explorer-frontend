import React from "react";

function ArticleInfo({ title, text }) {
    return(
        <div className="about-project-description">
            <h3 className="about-project-description-title">{ title }</h3>
            <p className="about-project-description-text">{ text }</p>
        </div>
    );
}

export default ArticleInfo;