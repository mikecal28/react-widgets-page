/*
4. FontSizer - 
 - Renders 2 buttons (Grow, Shrink) and a font size.
 - Each button should change the size of the font displayed in increments (try something like 5px up and down).
 - There should be a minimum and maximum size. (maybe 5px - 100px)
*/
import { useState, useEffect } from "react";

function FontSizer() {
  const [fontSize, setFontSize] = useState(50);

  return (
    <div className="widget-wrapper">
      <h2>Font Sizer</h2>
      <div style={{ fontSize: `${fontSize}px`, height: "8rem" }}>
        {fontSize}px
      </div>
      <div>
        <button
          onClick={() =>
            setFontSize((fontSize) => (fontSize > 5 ? fontSize - 5 : fontSize))
          }
        >
          -5px
        </button>
        <button
          onClick={() =>
            setFontSize((fontSize) =>
              fontSize < 100 ? fontSize + 5 : fontSize
            )
          }
        >
          +5px
        </button>
      </div>
    </div>
  );
}

export default FontSizer;
