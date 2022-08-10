/*
7. ColorChanger
- Render an <h2> Label that represents a color
- Render a text input
- Render a button
- When clicked, the button will update the text and the color of the <h2> through state
- The input should clear everytime the button is clicked.
- IE: typing the word "yellow" in the input will render the word "yellow" in the <h2>, with a 
  font-color of yellow.
*/
import { useState, useEffect } from "react";

function ColorChanger() {
  const [color, setColor] = useState("yellow");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setColor(value);
    setValue("");
  };

  return (
    <div className="widget-wrapper">
      <h2>Color Changer</h2>
      <div className="color-changer">
        <h2 style={{ color: `${color}`, height: "8rem" }}>{color}</h2>
      </div>
      <form>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ColorChanger;
