import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import watch from "../images/watch2.png";
const Products = () => {
  const items = [
    { name: "All" },
    { name: "Rings" },
    { name: "Necklaces" },
    { name: "Watches" },
    { name: "Bracelets" },
    { name: "Bags" },
    { name: "Shoes" },
  ];
  const products = [
    {
      category: "Wristwatch",
      name: "Fossil Monochromatic Watch",
      price: "$87.91",
      image: watch,
    },
    {
      category: "Wristwatch",
      name: "Fossil Monochromatic Watch",
      price: "$87.91",
      image: watch,
    },
    {
      category: "Wristwatch",
      name: "Fossil Monochromatic Watch",
      price: "$87.91",
      image: watch,
    },
    {
      category: "Wristwatch",
      name: "Fossil Monochromatic Watch",
      price: "$87.91",
      image: watch,
    },
    {
      category: "Wristwatch",
      name: "Fossil Monochromatic Watch",
      price: "$87.91",
      image: watch,
    },
    {
      category: "Wristwatch",
      name: "Fossil Monochromatic Watch",
      price: "$87.91",
      image: watch,
    },
  ];
  return (
    <div className="bg-pry-100 px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full ">
      <HeadingThree title="Our Products" color="gold" />
      <div className="flex justify-between w-full">
        {items.map((item, index) => {
          return (
            <button
              key={index}
              className="bg-pry-100 tracking-widest  flex justify-center w-full text-gold   font-body  py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300"
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="flex  justify-between flex-wrap ">
        {products.map((product, index) => {
          return (
            <div
              className="flex flex-col justify-between space-y-8 w-96 mb-24 border border-gold p-4 "
              key={index}
            >
              <div className="bg-gold p-4">
                <img
                  src={product.image}
                  className="W-full bg-pry-100"
                  alt="product"
                />
              </div>
              <p className="tracking-widest font-body  text-gold text-base">
                {product.category}
              </p>
              <div className="flex justify-between">
                <p className="font-heading  text-gold text-lg">
                  {product.name}
                </p>
                <p className="tracking-widest font-body  text-gold text-base font-bold">
                  {product.price}
                </p>
              </div>

              <PrimaryButton title="Add to cart +" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
