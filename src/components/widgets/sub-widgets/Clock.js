import { useState, useEffect } from "react";

function Clock(props) {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock((clock) => (clock += 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="widget-wrapper">
      <h3>{clock}</h3>
    </div>
  );
}

export default Clock;
