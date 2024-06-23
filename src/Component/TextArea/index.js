import React from "react";
import './TextArea.css';

const TextArea = ({ label, placeHolder,backgroundColor }) => {
  return (
    <div className="d-flex flex-column w-100">
      {label && <label className="TextAreaLabel roboto-medium">{label}</label>}
      <textarea placeholder={placeHolder} 
       className="form-control TextArea roboto-medium" style={{color:'#54595F', backgroundColor: backgroundColor ? backgroundColor :'#DFDFDF' }}/>
    </div>
  );
};

export default TextArea;
