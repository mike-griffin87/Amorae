import React from "react";
import Slider from "react-slick";
import "../static/slider.sass";


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
        <Slider {...settings}>
          {this.props.sliderContent}
        </Slider>
      </React.Fragment>
    );
  }
}

export default SimpleSlider