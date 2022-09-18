import React from "react";
import Tweets from "../../components/Images/tweets.png";
import "./tweets.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className="section-col">
        <div className="section-col-1">
          <img className="tweetsImage" src={Tweets} alt="what's on fire?" />
        </div>

        <div className="section-col-2">
          <div className="tweetsSubHeading">
            <div className="line" />
            <h3>Tweets</h3>
          </div>
          <h1>WHAT'S ON FIRE?</h1>
          <p>
            Sierra Club works to protect communities, wild places, and the
            planet, according to its Twitter feed. The Sierra Club was founded
            in 19=892 and is now the most influential grassroots environmental
            organization in the United States, boasting over two million members
            and supporters.
          </p>
        </div>
      </div>
      <div className="section-col">
        <div className="section-col-1">
          <img className="tweetsImage" src={Tweets} alt="what's on fire?" />
        </div>
        <div className="section-col-2">
          <div className="tweetsSubHeading">
            <div className="line" />
            <h5>Tweets</h5>
          </div>
          <h1>WHAT'S ON FIRE?</h1>
          <p>
            The Climate Reality Project was founded by Vice President Al Gore
            after he made the Academy Award-winning film about climate change,
            An Inconvenient Truth. The mission of the project is to stop or slow
            climate change and create a future that is healthy, prosperous and
            powered by clean energy.
          </p>
        </div>
      </div>
      <div className="section-col">
        <div className="section-col-1">
          <img className="tweetsImage" src={Tweets} alt="what's on fire?" />
        </div>
        <div className="section-col-2">
          <div className="tweetsSubHeading">
            <div className="line" />
            <h5>Tweets</h5>
          </div>
          <h1>WHAT'S ON FIRE?</h1>
          <p>
            The Earth Institute, located at Columbia University in New York, is
            dedicated to achieving a sustainable earth by mobilizing education,
            the sciences and public policy. The feed includes a weekly calendar
            of events, held at Columbia and elsewhere that are of interest to
            those who are concerned about climate change and its economic
            impacts.
          </p>
        </div>
      </div>
    </Slider>
  );
}

export default slider;
