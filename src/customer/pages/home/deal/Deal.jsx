import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1536, // 2XL screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280, // XL screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // LG screens (laptops/tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // MD screens (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // SM screens (mobile)
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 text-center">
        TODAY DEAL'S
      </h1>
      <div className="cursor-pointer">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div key={item} className="px-2">
              <DealCard />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Deal;
