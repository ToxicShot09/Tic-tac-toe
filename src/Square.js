import React from 'react';
import './Square.css'; // Import the CSS file for styling

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      <div className={`symbol ${value}`}>{value}</div>
    </button>
  );
}

export default Square;