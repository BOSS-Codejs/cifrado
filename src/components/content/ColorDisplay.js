import React from 'react';
import './Encrypt.css'; 

const ColorDisplay = ({ isRed }) => {
  return (
    <div className="color-display">
      <p> Modo: {isRed ? 'Cifrado Escítala' : 'Cifrado César'}</p>
    </div>
  );
};

export default ColorDisplay;