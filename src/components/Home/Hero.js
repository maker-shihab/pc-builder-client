import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Hero = () => {
  const settings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const sliderImages = ["/slider-1.webp", "/slider-2.webp", "/slider-3.webp"];
  return (
    <>
      <Slider {...settings}>
        {sliderImages.map((signleImage, i) => (
          <Image key={i} src={signleImage} width={"982"} height={"500"} />
        ))}
      </Slider>
    </>
  );
};

export default Hero;
