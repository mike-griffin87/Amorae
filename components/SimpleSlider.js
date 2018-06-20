import React from "react";
import Slider from "react-slick";
import "../static/slider.sass";
import Overlay from "./Overlay";


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        <Overlay overlay="true" />
        <Slider {...settings}>
          <div>
            <img src="./static/images/LaSposa/paulet_a.jpg" />
            <span className="slider-dress-info">
              <h2>Paulet</h2>
            </span>
          </div>
          
          <div>
            <img src="./static/images/LaSposa/paulet_b.jpg" />
            <span className="slider-dress-info">
              <h2>Paulet</h2>
            </span>
          </div>
          
          <div>
            <img src="./static/images/LaSposa/paulet_c.jpg" />
            <span className="slider-dress-info">
              <h2>Paulet</h2>
            </span>
          </div>
          


        </Slider>
      </React.Fragment>
    );
  }
}

export default SimpleSlider