import React from 'react';
import data from '../data.json';
import ColorCard from './ColorCard';

function ColorPicker() {
  return (
    <div className="color-picker">
      {data.colors.map((color) => (
        <ColorCard
          key={color.id}
          title={color.title}
          colorCode={color.colorCode}
          description={color.description}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
