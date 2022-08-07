import React from "react";

export const SampleLoaded = () => {
    var viral = Math.floor(Math.random() * 72) + 20 + "%";
    console.log(viral);
  return (
    <>
      <h3>Sample Loaded</h3>
      <h3>Viral Percentage: {viral}</h3>
      <button className="btn">Administer Vaccine</button>
    </>
  );
};
