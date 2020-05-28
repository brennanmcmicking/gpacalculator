import React, { useState } from "react";

import ClassEntry from "./classentry";

const GPACalculator = () => {
  const [count, setCount] = useState(1);
  const [gpa, setGPA] = useState();
  const [grades, setGrades] = useState([]);

  const createClasses = () => {
    let classes = [];
    for (let i = 0; i < count; i++) {
      classes.push(<ClassEntry key={i} id={i} updater={updateGrades} />);
    }
    return classes;
  };

  const updateGrades = (id, newClass) => {
    //console.log(id);
    //console.log(newClass);
    let g = grades;
    g.splice(id, 1, newClass);
    setGrades(g);
    //console.log(grades[id]);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const calculateGPA = () => {
    let totalUnits = 0;
    let totalWeightedGrade = 0;
    for (let i = 0; i < count; i++) {
      let curUnits = parseFloat(grades[i].units);
      let curGrade = parseFloat(grades[i].grade);
      totalUnits += curUnits;
      totalWeightedGrade += curGrade * curUnits;
    }
    console.log("totalWeightedGrade: " + totalWeightedGrade);
    console.log("totalUnits: " + totalUnits);
    setGPA(totalWeightedGrade / totalUnits);
  };

  return (
    <div className="calculator">
      <button onClick={decreaseCount}>-</button>
      {"  " + count + "  "}
      <button onClick={increaseCount}>+</button>
      {createClasses()}
      <button onClick={calculateGPA}>Calculate GPA</button>
      <div className="result">
        {!isNaN(gpa) ? gpa : "Enter valid numbers in all fields"}
      </div>
    </div>
  );
};

export default GPACalculator;
