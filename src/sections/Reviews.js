import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import reviewer1 from "../images/reviewer1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const Reviews = () => {
  const reviews = [
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here.",
      designation: "    Chief executive officer - Banks Media",
    },
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here.",
      designation: "    Chief executive officer - Banks Media",
    },
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here.",
      designation: "    Chief executive officer - Banks Media",
    },
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here.",
      designation: "    Chief executive officer - Banks Media",
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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={3}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        className="flex justify-between space-x-6 w-full h-full"
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide>
              <div
                className="flex flex-col justify-between w-full items-center bg-pry-100  md:px-12 px-6 pb-16 pt-8 space-y-6 md:space-y-9"
                key={index}
              >
                <HeadingThree title="&rdquo;" color="gold" />
                <p className="font-heading text-gold text-base text-center">
                  {review.review}
                </p>
                <div className="w-24 h-24 flex items-center justify-center rounded-full border border-pry-100 bg-gold">
                  <img src={review.image} className="w-full " alt="review" />
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
