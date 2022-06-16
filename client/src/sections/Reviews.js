import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import reviewer1 from "../images/reviewer1.png";
import reviewer2 from "../images/reviewer2.png";
import reviewer3 from "../images/reviewer3.png";
import reviewer4 from "../images/reviewer4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
// import required modules
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "They were extremely reliable and delivered way beyond my expectation",
      designation: "Realtor",
    },
    {
      id: 2,

      reviewer: "Adams Andy",
      image: reviewer2,
      review: "Impressive customer service,I was delighted with my purchase",
      designation: "Digital marketer",
    },
    {
      id: 3,

      reviewer: "James Fred",
      image: reviewer3,
      review:
        "Will definitely be back because there was always someone on hand to meet my needs.",
      designation: "Entrepreneur",
    },
    {
      id: 4,

      reviewer: "Felicity Fletcher",
      image: reviewer4,
      review:
        "I love the reliabilty of the products that I have purchased from   here.",
      designation: "Saleswoman",
    },
  ];
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 md:py-32 flex flex-col space-y-8 justify-center items-center w-full ">
      <HeadingThree title="What Our Clients Say" color="pry-100" />

      <Swiper
        loop
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className="flex justify-between space-x-6 w-full"
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide>
              <div
                className="flex flex-col justify-between w-full  items-center bg-pry-100  md:px-12 px-6 pb-16 pt-8 space-y-4 md:space-y-6"
                key={index}
              >
                <HeadingThree title="&rdquo;" color="gold" />
                <p className="font-heading text-gold text-base text-center h-24 md:h-auto">
                  {review.review}
                </p>
                <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full pb-2 bg-gold">
                  <img
                    src={review.image}
                    className="w-4/5 py-4 rounded-full bg-pry-100 "
                    alt="review"
                  />
                </div>
                <p className="tracking-widest font-heading  text-gold text-lg">
                  {review.reviewer}
                </p>
                <p className="tracking-widest font-body uppercase text-gold text-sm text-center">
                  {review.designation}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
