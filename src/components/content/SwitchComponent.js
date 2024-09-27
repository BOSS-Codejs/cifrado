import React from 'react';
import "./Encrypt.css";

const SwitchComponent = ({ isRed, toggleColor }) => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={!isRed}  
          onChange={toggleColor}  
        />
        <span className={`slider ${isRed ? 'red' : 'blue'}`}></span>
      </label>
    </div>
  );
};

export default SwitchComponent;
