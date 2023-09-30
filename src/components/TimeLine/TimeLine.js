import React from "react";
import TimeLineItem from "../TimeLineItem/TimeLineItem";

function TimeLine(){
    return(
        <div className="about-project__timeline">
            <TimeLineItem styleCont='about-project__timeline-item-done' styleText='about-project__timeline-done' duration='1 неделя' technology='Back-end'/>
            <TimeLineItem styleText='about-project__timeline-still' duration='4 недели' technology='Front-end'/>
        </div>
    );
}

export default TimeLine;