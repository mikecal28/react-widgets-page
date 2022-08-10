/*
1. Counter
  - Render a count value to the dom
  - Render two buttons, "add" and a "subtract"
  - The buttons will effectively add or subtract from the count, and render the new value on the dom. 
  *Don't let the count go below zero.
*/
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.id === "add") {
      setCount((count) => (count += 1));
    } else if (e.target.id === "subtract" && count > 1) {
      setCount((count) => (count -= 1));
    } else if (e.target.id === "subtract" && count <= 1) {
      setCount(0);
    }
  };

  return (
    <div className="widget-wrapper">
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button
          id="subtract"
          onClick={() => setCount((count) => (count > 1 ? (count -= 1) : 0))}
        >
          Subtract
        </button>
        <button id="add" onClick={() => setCount((count) => (count += 1))}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter;
