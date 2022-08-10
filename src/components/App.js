import { useState } from "react";

import Counter from "./widgets/Counter";
import GreetingToggle from "./widgets/GreetingToggle";
import ShowHideToggle from "./widgets/ShowHideToggle";
import FontSizer from "./widgets/FontSizer";
import TextAligner from "./widgets/TextAligner";
import LifecycleClock from "./widgets/LifecycleClock";
import ColorChanger from "./widgets/ColorChanger";
import RgbSliders from "./widgets/RgbSliders";

export default function App() {
  const [mount, setMount] = useState(false);

  return (
    <div className="app">
      <h1>React Widgets Page</h1>
      <div className="widget-container">
        <Counter />
        <GreetingToggle />
        <ShowHideToggle />
        <FontSizer />
        <TextAligner />
        <LifecycleClock />
        <ColorChanger />
        <RgbSliders />
      </div>
    </div>
  );
}
