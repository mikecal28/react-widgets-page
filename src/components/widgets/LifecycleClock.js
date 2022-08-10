/*
6. Lifecycle Clock
- Render a component that displays a button
- On Click, the button will mount / unmount (text should update on the button) a clock component
- The Clock Component should "tick" every second
- When unmounting, you must cleanup the interval to avoid a memory leak
*/
import { useState, useEffect } from "react";
import Clock from "./sub-widgets/Clock";

function LifecycleClock() {
  const [mount, setMount] = useState(false);

  return (
    <div className="widget-wrapper">
      <h2>Lifecycle Clock</h2>
      {mount && <Clock mount={mount} setMount={setMount} />}
      <button onClick={() => setMount((mount) => !mount)}>
        {mount ? "Unmount" : "Mount"}
      </button>
    </div>
  );
}

export default LifecycleClock;
