import React from "react";
import SpanTemplate from "../SpanTemplate/SpanTemplate";

function TimeLineItem({ duration, technology, styleText, styleCont }) {
    return(
        <div className={`${ styleCont } about-project__timeline-item`}>
            <SpanTemplate className={`${ styleText } about-project__timeline-text`} text={ duration } />
            <SpanTemplate className='about-project__timeline_capt' text={ technology } />
        </div>
    );
}

export default TimeLineItem;