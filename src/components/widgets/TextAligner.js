/*
5. TextAligner -
 - Renders a line of text
 - Renders 3 buttons (left, center, right)
 - Each button should align the text left of the screen, center screen, and right of the screen
*/
import { useState, useEffect } from "react";

function TextAligner() {
  const [alignment, setAlignment] = useState("center");

  return (
    <div className="widget-wrapper">
      <h2>Text Aligner</h2>
      <div
        style={{
          display: "block",
          width: "100%",
          fontSize: "min(4vw, 5rem)",
          textAlign: `${alignment}`,
          height: "8rem",
        }}
      >
        {alignment.slice(0, 1).toUpperCase() + alignment.slice(1)}-Aligned
      </div>
      <div>
        <button onClick={() => setAlignment("left")}>Left</button>
        <button onClick={() => setAlignment("center")}>Center</button>
        <button onClick={() => setAlignment("right")}>Right</button>
      </div>
    </div>
  );
}

export default TextAligner;
