import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/images/bannerImage-1.jpg';
import image2 from '../../assets/images/bannerImage-2.jpg';
import image3 from '../../assets/images/bannerImage-3.jpg';
import { BannerFigure } from "./imageSlider.style";

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <BannerFigure>
        <img src={image1} alt="" />
      </BannerFigure>
      <BannerFigure>
        <img src={image2} alt="" />
      </BannerFigure>
      <BannerFigure>
        <img src={image3} alt="" />
      </BannerFigure>
    </Slider>
  );
}

export default ImageSlider;