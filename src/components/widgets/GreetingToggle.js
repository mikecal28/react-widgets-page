/*
2. Greeting Toggle
  - Render some "hello" greeting
  - Render a button, "Toggle Me"
  - The button will toggle the greeting between a "hello" and "goodbye" every time it's clicked.
*/
import { useState, useEffect } from "react";

function GreetingToggle() {
  const [greeting, setGreeting] = useState(true);

  return (
    <div className="widget-wrapper">
      <h2>Greeting Toggle</h2>
      <h3>{greeting ? "Hello" : "Goodbye"}</h3>
      <button onClick={() => setGreeting((greeting) => !greeting)}>
        Toggle Me
      </button>
    </div>
  );
}

export default GreetingToggle;
