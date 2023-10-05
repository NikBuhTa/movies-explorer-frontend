import React from "react";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function TimeLineItem({ duration, technology, styleText, styleCont }) {
    return(
        <div className={`${ styleCont } about-project__timeline-item`}>
            <SpanTemplate className={`${ styleText } about-project__timeline-text`} content={ duration } />
            <SpanTemplate className='about-project__timeline_capt' content={ technology } />
        </div>
    );
}

export default TimeLineItem;