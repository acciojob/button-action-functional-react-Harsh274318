import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isture, setIstrue] = useState(false);
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <h1>hello</h1>
      <button id="click" onClick={() => setIstrue(true)}>
        click
      </button>
      {isture && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
