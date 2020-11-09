import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [change, setChange] = useState(true);
  return (
    <div id="main">
      <button id="click" onClick={() => setChange(!change)}>
        {" "}
        click Me{" "}
      </button>
      {change ? (
        <p></p>
      ) : (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
