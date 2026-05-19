import React from "react";

const Result = ({ result }) => {
  return (
    <div>
      <h2>Recommended Crop:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Result;