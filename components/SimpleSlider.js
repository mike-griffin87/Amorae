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
          <div>
            <img src="../static/images/RonaldJoyce/Ada_a.jpg" />
          </div>
          <div>
          <img src="../static/images/RonaldJoyce/Ada_b.jpg" />
          </div>
          <div>
          <img src="../static/images/RonaldJoyce/Ada_c.jpg" />
          </div>
        </Slider>
        <div className="dress-details"><h2>{this.props.dressName}</h2></div>
      </React.Fragment>
    );
  }
}

export default SimpleSlider