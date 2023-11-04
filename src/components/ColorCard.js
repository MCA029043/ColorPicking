import React from 'react';

function ColorCard(props) {
  return (
    <div className="color-card">
      <div className="color-box" style={{ backgroundColor: props.colorCode }}></div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default ColorCard;
