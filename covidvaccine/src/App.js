import "./App.css";
import { SampleLoaded } from "./SampleLoaded";
import { SampleNotLoaded } from "./SampleNotLoaded";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
function App() {
  const [active, setActive] = useState("SampleNotLoaded");
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop src="/images/Covid.mp4" type="video/mp4" />
      </div>
      <div className="SampleForm">
        <div className="mb-3 loadSample">
          <label className="form-label">Load Samples</label>
          <button className="btn">Load Samples</button>
        </div>
        <div className="mb-3">
          <label className="form-label">Paitent's Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Paitent's Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Paitent's Phone No</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Paitent's Age</label>
          <input type="email" className="form-control" />
        </div>
        <select className="form-select">
          <option selected>Select Test type</option>
          <option value="1">Antigen</option>
          <option value="2">PVC</option>
        </select>
        <button
          className="btn"
          onClick={() => {
            setActive("SampleLoaded");
          }}
        >
          Load Samples
        </button>
      </div>
      <div className="results-container">
        <div className="results">
          {active === "SampleLoaded" && <SampleLoaded />}
          {active === "SampleNotLoaded" && <SampleNotLoaded />}
        </div>
      </div>
    </>
  );
}

export default App;
