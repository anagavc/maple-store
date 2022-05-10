import React from "react";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";

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
  return (
    <div className="bg-pry-50 px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Products
      </p>
      <HeadingTwo
        title="Products"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <div className="flex justify-between">
        <div className="flex flex-col justify-between space-y-6 border-r border-r-pry-100 px-6">
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
                    className="outline-pry-100 accent-pry-100"
                  />
                  {option.name}
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
