import React from "react";

const Title = props => {
  return (
    <div>
      <h4
        style={{
          position: props.position,
          width: props.width,
          left: props.left,
          top: props.top,
          fontSize: props.fontSize,
          color: props.color,
          textTransform: props.textTransform
        }}
      >
        {props.text}
      </h4>
    </div>
  );
};

export default Title;
