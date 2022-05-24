import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingTwo, Paragraph } from "../components/UI/FontStyles/FontStyles";
import image1 from "../images/productImage.jpg";
import image2 from "../images/earrings.jpg";
const ProductDetail = () => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Products &gt; Expensive Ring
      </p>
      <HeadingTwo
        title="Product Details"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-12">
        <div className="flex flex-col justify-between flex-1 h-3/5">
          <div className="  w-full ">
            <img src={image2} alt="Fossil watch" />
          </div>
          <div className="flex justify-between  mt-4 space-x-4 md:mt-8 md:space-x-8">
            <div className="bg-pry-100 w-3/5 ">
              <img src={image1} alt="Fossil watch" />
            </div>
            <div className="bg-pry-100 w-3/5">
              <img src={image1} alt="Fossil watch" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1  h-4/5 space-y-7 ">
          <p className="tracking-widest font-body uppercase text-pry-100 text-md">
            Wristwatch
          </p>
          <p className="font-heading  text-pry-100 text-2xl">
            Fossil Leather Wristwatch
          </p>
          <p className="font-body text-pry-100 text-base text-justify tracking-wide">
            Elegance best describes this time piece, it will definitely cause
            stares in your direction, Every gnetleman needs one in his
            collectiion.Elegance best describes this time piece, it will
            definitely cause stares in your direction, Every gnetleman needs one
            in his collectiion.Elegance best describes this time piece, it will
            definitely cause stares in your direction, Every gnetleman needs one
            in his collectiion
          </p>
          <div className="flex flex-col">
            <Paragraph>Material: Leather</Paragraph>
            <Paragraph>Price: $500</Paragraph>
            <Paragraph>Color: Green</Paragraph>
          </div>
          <PrimaryButton title="Add to cart " />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
