import React from "react";

function CustomInput(props) {
  const { type, name, placeholder, className = "" } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control${className}`}
      />
    </>
  );
}

export default CustomInput;
