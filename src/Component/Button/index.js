import React from 'react';
import './Button.css';

const Button = ({ btnTitle, onClick }) => {
  return (
    <button className="button w-100" onClick={onClick}>
      {btnTitle}
    </button>
  );
};

export default Button;
