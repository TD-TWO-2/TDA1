import React from "react";
import './TextArea.css';

const TextArea = ({ label, placeHolder, backgroundColor, labelColor, value, onChange, name, required, showError }) => {
  return (
    <div className="d-flex flex-column w-100">
      {label && (
        <label className="TextAreaLabel roboto-medium" style={{ color: labelColor ? labelColor : 'black' }}>
          {label}
          {required && <span style={{ color: 'red',fontSize:12, fontFamily:'poppins-regular' }}> *</span>}
        </label>
      )}
      <textarea 
        placeholder={placeHolder}
        className={`form-control TextArea roboto-medium ${showError ? 'is-invalid' : ''}`}
        style={{ color: '#54595F', backgroundColor: backgroundColor ? backgroundColor : '#DFDFDF' }}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {showError && <div className="invalid-feedback">This field is required</div>}
    </div>
  );
};

export default TextArea;
