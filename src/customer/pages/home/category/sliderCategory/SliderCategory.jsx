import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCategory = () => {
  const images = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_copy_lmUq6z9.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_1_pJmiEMg.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HP_wfaIbAJ.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_1_ARCM8e3.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_copy_5_mpe0RCz.jpg?w=1500&dpr=2",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_copy_MY9QHLp.jpg?w=1500&dpr=2",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // cleaner look
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[530px] overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[500px] lg:h-[500px] object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCategory;
