import "./Counter.css";
import React, { useState, useEffect } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setValue((value) => value + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const stopCounter = () => {
    setRunning(!running);
  };

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <p className="value">{value}</p>
      <button className="stop-button" onClick={stopCounter}>
        {running ? "Stop" : "Restart"}
      </button>
    </div>
  );
}

export default Counter;
