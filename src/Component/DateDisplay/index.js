// src/Component/DateDisplay.js
import React from 'react';

const DateDisplay = () => {
   const arabicDate=  new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
   const options = { weekday: 'long',day: 'numeric', month: 'long', year: 'numeric' };
   const date = new Date()
   const today = date.toLocaleDateString('en-GB', options);
  return (
    <div>
      <p className='text-white lead'>{today} | {arabicDate}</p>
    </div>
  );
};

export default DateDisplay;
