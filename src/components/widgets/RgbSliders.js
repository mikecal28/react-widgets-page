/*
8. RGBSliders
- Render a small box with a solid background color
- Render a label underneath (rgb(0, 0, 0))
- Render three range slider input elements.
- When sliding an input, it should update a corresponding value (either the r, g, or b)
- The background color of the small box should update to the appropriate color
- The label should update appropriately as you slide
*/
import { useState, useEffect } from "react";

function RgbSliders() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="widget-wrapper">
      <h2>RGB Sliders</h2>
      <div
        className="rgb-box"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue}` }}
      ></div>
      <label>{`rgb(${red}, ${green}, ${blue})`}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={red}
        onChange={(e) => setRed(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={green}
        onChange={(e) => setGreen(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="255"
        value={blue}
        onChange={(e) => setBlue(e.target.value)}
      />
    </div>
  );
}

export default RgbSliders;
