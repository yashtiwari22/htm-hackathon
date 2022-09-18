import React from "react";
import blogImage from "../Images/blogImage.png";
import ImageSlider from "./slider.js"
import "./blogs.css";
function index() {
  return (
    <div className="blogOuterContainer" id="blogs-part">
      <div className="blog-image-div">
        <img className="blog-image" src={blogImage} alt="blogImage" />
      </div>
      <div className="blogsHeading">
        <div className="blogsSubHeading">
          <div className="line"/>
          <h3>Global News</h3>
        </div>
        <div className="blogsMainHeading">
          <h1>Blogs & Tweets</h1>
        </div>
      </div>
      <div className="blogs">
        <ImageSlider/>
      </div>
    </div>
  );
}

export default index;
