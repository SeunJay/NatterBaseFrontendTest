import React from "react";

const Button = props => {
  return (
    <div>
      <button
        style={{
          position: props.position,
          left: props.left,
          top: props.top,
          width: props.width,
          fontSize: props.fontSize,
          color: props.color,
          background: props.background,
          height: props.height,
          outline: props.outline
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
