/*
3. Show / Hide Toggle
  - Render text on the dom. "Hide Me"
  - Render a button. "Show / Hide".
  - The button will either show, or hide the text on the page. 
  *The button text should be conditionally rendered. IE: If the text is displayed, the button should say "Hide", and if it's hidden the button should say "Show".
*/
import { useState } from "react";

function ShowHideToggle() {
  const [message, setMessage] = useState(true);

  return (
    <div className="widget-wrapper">
      <h2>Show/Hide Toggle</h2>
      <h3 className={!message ? "hidden" : null}>Hide Me</h3>
      <button onClick={() => setMessage((message) => !message)}>
        {message ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ShowHideToggle;
