import React, { useState } from "react";

const ClassEntry = ({ id, updater }) => {
  const [grade, setGrade] = useState("");
  const [units, setUnits] = useState("");

  const updateGrade = (newGrade) => {
    updater(id, { grade: newGrade, units: units });
    setGrade(newGrade);
  };

  const updateUnits = (newUnits) => {
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
