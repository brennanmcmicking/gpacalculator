import React, { useState } from "react";

import ClassEntry from "./classentry";

const GPACalculator = () => {
  const [count, setCount] = useState(1);
  const [gpa, setGPA] = useState();

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const calculateGPA = () => {
    setGPA(5);
  };

  return (
    <div className="calculator">
      <button onClick={decreaseCount}>-</button>
      {"  " + count + "  "}
      <button onClick={increaseCount}>+</button>
      {Array(count).fill(<ClassEntry />)}
      <button onClick={calculateGPA}>Calculate GPA</button>
      <div className="result">{gpa}</div>
    </div>
  );
};

export default GPACalculator;
