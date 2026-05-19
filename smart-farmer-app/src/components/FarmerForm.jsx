import React, { useState } from "react";
import crops from "../data/crops";
import Result from "./Result";

const FarmerForm = () => {
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundCrop = crops.find(
      (item) => item.soil === soil && item.season === season
    );

    if (foundCrop) {
      setResult(foundCrop.crop);
    } else {
      setResult("No suitable crop found");
    }
  };

  return (
    <div className="container">
      <h1>Smart Farmer App</h1>

      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setSoil(e.target.value)}>
          <option>Select Soil Type</option>
          <option>Black</option>
          <option>Red</option>
          <option>Clay</option>
          <option>Sandy</option>
        </select>

        <select onChange={(e) => setSeason(e.target.value)}>
          <option>Select Season</option>
          <option>Summer</option>
          <option>Winter</option>
          <option>Rainy</option>
        </select>

        <button type="submit">Get Crop</button>
      </form>

      <Result result={result} />
    </div>
  );
};

export default FarmerForm;