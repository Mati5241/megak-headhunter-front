import React from 'react';
import './Foot.css';

interface FootProps {
  // Jeśli komponent nie otrzymuje żadnych propsów, możesz zostawić ten interfejs pusty
}

export const Foot: React.FC<FootProps> = (props) => {
  return (
    <div id="foot">
      <label>Ilość elementów</label>
      <select defaultValue="10" id='select-quantity'>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>

      10 z 90
      <button className="previous-next-button">⮜</button>
      <button className="previous-next-button">⮞</button>
    </div>
  );
};
