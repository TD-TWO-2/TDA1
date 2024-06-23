import React from "react";
import './TextInput.css'
const TextInput = ({label, placeHolder}) => {
  return (
    <>
      <label className="TextInputLabel">{label}</label>
      <input type="email" placeholder={placeHolder}
       className="form-control TextInput" />
    </>
  );
};

export default TextInput;
