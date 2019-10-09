import React from "react";

const Input = props => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        style={{
          position: props.position,
          left: props.left,
          top: props.top,
          width: props.width,
          textAlign: props.textAlign,
          background: props.background,
          outline: props.outline,
          borderRadius: props.borderRadius,
          boxSizing: props.boxSizing,
          border: props.border,
          height: props.height
        }}
      />
    </>
  );
};

export default Input;
