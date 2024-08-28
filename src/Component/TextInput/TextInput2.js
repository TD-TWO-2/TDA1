import React from "react";
import "./TextInput.css";

const TextInput2 = ({
  label,
  placeHolder,
  backgroundColor,
  labelColor,
  InputType,
  onChange,
  name,
  required,
  showError,
  value,
  minDate
}) => {
  const getCurrentDateTimeFormatted = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  return (
    <div className="d-flex flex-column w-100">
      {label && (
        <label
          className="TextAreaLabel poppins-regular"
          style={{ color: labelColor ? labelColor : "black" }}
        >
          {label}
          {required && <span style={{ color: 'red',fontSize:12, fontFamily:'poppins-regular' }}> *</span>}
        </label>
      )}
      <input
        type={InputType ? InputType : "text"}
        name={name}
        placeholder={placeHolder}
        className="form-control TextInput poppins-regular"
        style={{
          color: "#54595F",
          backgroundColor: backgroundColor ? backgroundColor : "#FFF",
        }}
        // onChange={(e) => onChange(e.target.name, e.target.value)}
        required={required}
        value={value}
        min={minDate}

      />
      {showError && required && (
        <span className="error-text" style={{ color: "red" }}>
          This field is required.
        </span>
      )}
    </div>
  );
};

export default TextInput2;
