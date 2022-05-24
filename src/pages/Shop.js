import React from "react";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import InfoIcon from "@mui/icons-material/Info";
import watch from "../images/watch2.png";
import { NavLink } from "react-router-dom";
const Shop = () => {
  const filterItems = [
    {
      title: "Categories",
      options: [
        { name: "Rings" },
        { name: "Wristwatch" },
        { name: "Bracelets" },
        { name: "Earrings" },
        { name: "Necklaces" },
      ],
    },
    {
      title: "Material",
      options: [
        { name: "Gold" },
        { name: "Silver" },
        { name: "Leather" },
        { name: "Cotton" },
        { name: "Rubber" },
      ],
    },
    {
      title: "Color",
      options: [
        { name: "Brown" },
        { name: "Pink" },
        { name: "Emerald" },
        { name: "Beige" },
        { name: "Black" },
      ],
    },
    {
      title: "Price",
      options: [
        { name: "$50 - $500" },
        { name: "$500 - $5,000" },
        { name: "$50,000 - $500,000" },
        { name: "$500,000 & Above" },
      ],
    },
    {
      title: "Collection",
      options: [
        { name: "Cartier" },
        { name: "Rolex" },
        { name: "Gucci" },
        { name: "Fendi" },
      ],
    },
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
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Products
      </p>
      <HeadingTwo
        title="Products"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
        <div className="flex flex-col md:hidden">
          <div className="flex flex-col">
            <label
              className="font-body text-lg text-pry-100"
              htmlFor="category"
            >
              Choose category
            </label>
            <select
              className="border border-pry-100 text-pry-100 px-2 py-2 bg-pry-50 transition duration-300 ease-in"
              name="category"
              id="category"
            >
              <option>Wristwatch</option>
              <option>Bags</option>
              <option>Shoes</option>
            </select>
          </div>
        </div>
        <div className="md:flex hidden flex-col px-8 space-y-6 border-r border-r-pry-100 ">
          {filterItems.map((item, index) => (
            <div
              className="flex flex-col justify-between space-y-2"
              key={index}
            >
              <p className="font-body text-md text-pry-100 font-bold">
                {item.title}
              </p>
              {item.options.map((option, index) => (
                <label
                  className="font-body text-sm text-pry-100 flex justify-start gap-4 items-center"
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="outline-pry-100 accent-pry-100 bg-pry-50"
                  />
                  {option.name}
                </label>
              ))}
            </div>
          ))}
        </div>
        <div className="flex w-full md:w-4/5 justify-between  flex-wrap  ">
          {products.map((product, index) => {
            return (
              <div
                className="flex flex-col justify-between space-y-6 bg-pry-100 w-full md:w-80 mb-16 px-6 py-6"
                key={index}
              >
                <div className="bg-gold">
                  <img src={product.image} className="W-full" alt="product" />
                </div>
                <div className="flex justify-between">
                  <p className="tracking-widest font-body  text-gold text-base">
                    {product.category}
                  </p>
                  <NavLink
                    to="/products/:id"
                    className="text-gold hover:text-pry-50 transition duration-300"
                  >
                    <InfoIcon />
                  </NavLink>
                </div>

                <p className="font-heading  text-gold text-lg">
                  {product.name}
                </p>
                <p className="tracking-widest font-body  text-gold text-base font-bold">
                  {product.price}
                </p>

                <PrimaryButton title="Add to cart " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
