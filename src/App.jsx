import { useState } from "react";
import './App.css'
import colors from "./colors.jsx";

const ColorFlipper = () => {
  const [backgroundColor, setbackgroundColor] = useState(colors[0]);
  const [colorType, setColorType] = useState('name')

  const changeColorType = (code) => {
    setColorType(code)
  }

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setbackgroundColor(randomColor);
  };

  return (
    <>

      <nav>
        <div className="flex">
          <h2>Color Flipper</h2>
          <ul className="links">
            <li>
              <a href="#" onClick={() => changeColorType('name')}>Simple</a>
            </li>
            <li>
              <a href="#" onClick={() => changeColorType('hex')}>Hex</a>
            </li>
          </ul>
        </div>
      </nav>

      <section style={{ backgroundColor: backgroundColor.hex }}>
        <div className="">
          <div>
            <h1>Background Color: {colorType === 'name' ? backgroundColor.name : backgroundColor.hex}</h1>
            <button onClick={changeColor} className="btn">Change Color</button>
          </ div>
        </div>
      </section>
    </>
  );
};

export default ColorFlipper;