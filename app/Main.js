import React from "react";
import ReactDOM from "react-dom";

function ExampleComponent() {
  return (
    <div>
      <h1>Hey app</h1>
      <p>our app</p>
    </div>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));
