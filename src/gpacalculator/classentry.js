import React, { useState } from "react";

const ClassEntry = ({ id, updater }) => {
  const [grade, setGrade] = useState("");
  const [units, setUnits] = useState("");

  // We have to push the new grade up to the parent class before we re-render.
  const updateGrade = (newGrade) => {
    if (isNaN(newGrade) && newGrade !== "-") {
      newGrade = ""; // Don't let them pass in an invalid grade
    }
    updater(id, { grade: newGrade, units: units });
    setGrade(newGrade);
  };

  // Same thing as updateGrade, but with units this time.
  const updateUnits = (newUnits) => {
    if (isNaN(newUnits) && newUnits !== "-") {
      newUnits = ""; // Don't let them pass in an invalid unit value
    }

    updater(id, { grade: grade, units: newUnits });
    setUnits(newUnits);
  };

  return (
    <div className="class">
      <form>
        <input value={grade} onChange={(e) => updateGrade(e.target.value)} />
        <input value={units} onChange={(e) => updateUnits(e.target.value)} />
      </form>
    </div>
  );
};

export default ClassEntry;
