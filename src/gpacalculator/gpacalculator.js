import React, { useState } from "react";

import "./gpacalculator.css";
import ClassEntry from "./classentry";

const GPACalculator = () => {
  // We want to re-render when we change the number of classes (count)
  // or when the GPA is calculated.
  // We also store grades as a state so that they don't get lost when other states change.
  const [count, setCount] = useState(1);
  const [gpa, setGPA] = useState("Enter a valid number in all fields");
  const [grades, setGrades] = useState([]);

  // Maps out each class field with a unique ID so that we can keep track later.
  // Also passes in a reference to the updater function
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

    // Here, we "splice" the new class object into our current grades array.
    // splice takes 3 arguments:
    //  the index to add
    //  the number of items to delete
    //  the new object to insert
    // So but inserting one item and deleting 1 item, we have effectively
    // overwritten the old item with the new one.
    g.splice(id, 1, newClass);

    // Finally, we update the state, causing a re-render
    setGrades(g);
    //console.log(grades[id]);
  };

  const decreaseCount = () => {
    // We don't want them to be able to have less than 1 class
    // because that makes no sense.
    if (count > 1) {
      // Re-render with 1 less class.
      setCount(count - 1);
    }
  };
  const increaseCount = () => {
    // Re-render with 1 more class
    setCount(count + 1);
  };

  const updateCount = (newCount) => {
    // if the user tries to enter a non-number OR they try to enter a number less than 1
    if (isNaN(newCount) || (newCount < 1 && newCount !== "")) {
      newCount = ""; // Just set number of classes to 1
    }
    setCount(newCount);
  };

  const calculateGPA = () => {
    // Here we just calculate their weighted GPA
    let totalUnits = 0;
    let totalWeightedGrade = 0;
    for (let i = 0; i < count; i++) {
      try {
        let curGrade = parseFloat(grades[i].grade);
        let curUnits = parseFloat(grades[i].units);
        totalUnits += Math.abs(curUnits);
        totalWeightedGrade += curGrade * curUnits;
      } catch (error) {
        setGPA(error);
      }
    }
    // console.log("totalWeightedGrade: " + totalWeightedGrade);
    // console.log("totalUnits: " + totalUnits);
    setGPA(totalWeightedGrade / totalUnits);
  };

  return (
    <div className="calculator">
      Number of Classes: <br />
      <button onClick={decreaseCount}>-</button>
      <input value={count} onChange={(e) => updateCount(e.target.value)} />
      <button onClick={increaseCount}>+</button>
      <br />
      Grade | Units
      {createClasses() /* Here is where the class boxes get inserted */}
      <button onClick={calculateGPA}>Calculate GPA</button>
      <div className="result">
        {!isNaN(gpa) ? gpa : "Enter valid numbers in all fields"}
      </div>
    </div>
  );
};

export default GPACalculator;
