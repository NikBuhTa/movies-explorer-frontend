import React from "react";

function SpanTemplate({ className, content }) {
    return(
      <span className={className}>{ content }</span>
    );
}

export default SpanTemplate;