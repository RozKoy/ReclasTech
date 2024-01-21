/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import Slider from "react-slick";
import CardTesti2 from "./CardTesti2";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768, // Breakpoint for medium screens and below (md)
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <CardTesti2 />
          <CardTesti2 />
          <CardTesti2 />
          <CardTesti2 />
         
        </Slider>
      </div>
    );
  }
}
