import React from "react";

function SpanTemplate({ onClick = () => {}, className, content }) {
    return(
      <span onClick={onClick} className={className}>{ content }</span>
    );
}

export default SpanTemplate;