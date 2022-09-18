import React from "react";
import cardImage1 from "../Images/cardimage1.png";
import bengal from "../Images/bengal.png"
import protect from "../Images/protect.png"
import trees from "../Images/trees.png"
import oceans from "../Images/oceans.png"
import personProtesting from "../Images/personProtesting.png"


import "./blogs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function slider() {
  var settings = {
    dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={cardImage1} alt="card-image" />
          </div>
          <div className="detail"><h2>Monday<span className="blog-detail">Forest Fire</span></h2></div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={bengal} alt="card-image" />
          </div>
          <div className="detail"><h2>Monday<span className="blog-detail">Protect the Bengal Tiger</span></h2></div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={protect} alt="card-image" />
          </div>
          <div className="detail"><h2>Wednesday<span className="blog-detail">Protect the Planet</span></h2></div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={trees} alt="card-image" />
          </div>
          <div className="detail"><h2>Friday<span className="blog-detail">Afforestation</span></h2></div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={oceans} alt="card-image" />
          </div>
          <div className="detail"><h2>Saturday<span className="blog-detail">Cleaning the Ocean</span></h2></div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img className="cardImage" src={personProtesting} alt="card-image" />
          </div>
          <div className="detail"><h2>Monaday<span className="blog-detail">Nature Protest</span></h2></div>
        </div>
      </div>
    </Slider>
  );
}

export default slider;
