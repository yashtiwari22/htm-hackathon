import React from "react";
import ImageSlider from "./slider.js";
import "./issues.css";
function index() {
  return (
    <div className="issuesOuterContainer" id="issues">
      <div className="issuesHeading">
        <div className="issuesSubHeading">
          <div className="line" />
          <h3>Global News</h3>
        </div>
        <div className="issuesMainHeading">
          <h1>Issues around the globe</h1>
        </div>
      </div>
      <div className="iss">
        <ImageSlider />
      </div>
    </div>
  );
}

export default index;
