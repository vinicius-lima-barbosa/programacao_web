import "./Counter.css";
import { useState, useEffect } from "react";

function Counter() {
  return (
    <div className="container">
      <h2 className="title">Counter</h2>
      <p className="value">0</p>
      <button className="stop-button">Stop</button>
    </div>
  );
}

export default Counter;
