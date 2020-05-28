import React, { useState } from "react";

const ClassEntry = () => {
  const [grade, setGrade] = useState("");
  const [units, setUnits] = useState("");

  return (
    <div className="class">
      Class:
      <form>
        <input value={grade} onChange={(e) => setGrade(e.target.value)} />
        <input value={units} onChange={(e) => setUnits(e.target.value)} />
      </form>
    </div>
  );
};

export default ClassEntry;
