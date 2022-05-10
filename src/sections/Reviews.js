import React from "react";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import reviewer1 from "../images/reviewer1.png";
const Reviews = () => {
  const reviews = [
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here and how polite the customer service was, I will highly recommend.",
      designation: "    Chief executive officer - Banks Media",
    },
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here and how polite the customer service was, I will highly recommend.",
      designation: "    Chief executive officer - Banks Media",
    },
    {
      reviewer: "Jessica Banks",
      image: reviewer1,
      review:
        "I love the reliabilty of the products that I have purchased from   here and how polite the customer service was, I will highly recommend.",
      designation: "    Chief executive officer - Banks Media",
    },
  ];
  return (
    <div className="bg-pry-50 px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full ">
      <HeadingThree title="What Our Clients Say" color="pry-100" />
      <div className="flex justify-between space-x-6">
        {reviews.map((review, index) => {
          return (
            <div
              className="flex flex-col justify-between items-center bg-pry-100  px-12 pb-16 pt-8 space-y-6"
              key={index}
            >
              <HeadingThree title="&rdquo;" color="gold" />
              <p className="font-heading text-gold text-base text-center">
                {review.review}
              </p>
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gold">
                <img src={review.image} className="w-full " alt="review" />
              </div>
              <p className="tracking-widest font-heading  text-gold text-lg">
                {review.reviewer}
              </p>
              <p className="tracking-widest font-body uppercase text-gold text-sm text-center">
                {review.designation}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
