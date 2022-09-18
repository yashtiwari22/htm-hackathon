import React from "react";
import issueImage from "../Images/issueImage.png";
import personProtesting from "../Images/personProtesting.png";
import co2 from "../Images/co2.png";
import cows from "../Images/cows.png";
import greatPlanet from "../Images/greatPlanet.png";
import bengal from "../Images/bengal.png";

import "./issues.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={issueImage} alt="card-image" />
          </div>
          <div className="detail"><h2>Monday<span className="blog-detail">Pollution Protest</span></h2></div>

        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={personProtesting} alt="card-image" />
          </div>
          <div className="detail"><h2>Monday<span className="blog-detail">Nature</span></h2></div>

        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={co2} alt="card-image" />
          </div>
          <div className="detail"><h2>Wednesday<span className="blog-detail">CO<sub>2</sub> Consumption</span></h2></div>

        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={cows} alt="card-image" />
          </div>
          <div className="detail"><h2>Thursday<span className="blog-detail">Butchering of Cows</span></h2></div>

        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={greatPlanet} alt="card-image" />
          </div>
          <div className="detail"><h2>Friday<span className="blog-detail">Planet Cleanup</span></h2></div>

        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={bengal} alt="card-image" />
          </div>
          <div className="detail"><h2>Sunday<span className="blog-detail">Endangered Species</span></h2></div>

        </div>
      </div>
    </Slider>
  );
}

export default slider;
