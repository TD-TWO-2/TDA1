import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ label, labelColor, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(label, !checked);
    onChange(!checked)
  };

  return (
    <div>
      <label
        className="checkbx-container"
        style={{ color: labelColor ? labelColor : "black", whiteSpace: "pre" }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
