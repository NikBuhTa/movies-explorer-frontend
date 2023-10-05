import React  from "react";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function AnchorTemplate({ className, text, anchor, onClick }){
    return(
        <span onClick={onClick} className="anchor"><SpanTemplate className={className} content={text}/></span>
    );
};

export default AnchorTemplate;