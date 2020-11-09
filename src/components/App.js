import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [change, setChange] = useState(false);
  function renderPara() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }

  return (
    <div id="main">
      <button id="click" onClick={() => setChange(!change)}>
        {" "}
        click Me{" "}
      </button>
      {change ? "" : renderPara()}
    </div>
  );
}

export default App;
