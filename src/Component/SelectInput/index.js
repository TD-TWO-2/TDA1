import React from "react";
import "./SelectInput.css";

const SelectInput = ({
  label,
  options,
  backgroundColor,
  labelColor,
  onChange,
  name,
  required,
  showError,
  value,
}) => {
  return (
    <div className="d-flex flex-column w-100">
      {label && (
        <label
          className="SelectAreaLabel poppins-regular"
          style={{ color: labelColor ? labelColor : "black" }}
        >
          {label}
          {required && (
            <span
              style={{ color: 'red', fontSize: 12, fontFamily: 'poppins-regular' }}
            >
              {" "}
              *
            </span>
          )}
        </label>
      )}
      <select
        name={name}
        className="form-control SelectInput poppins-regular"
        style={{
          color: "#54595F",
          backgroundColor: backgroundColor ? backgroundColor : "#FFF",
        }}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        required={required}
        value={value}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {showError && required && (
        <span className="error-text" style={{ color: "red" }}>
          This field is required.
        </span>
      )}
    </div>
  );
};

export default SelectInput;
