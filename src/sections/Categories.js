import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import rings from "../images/earrings.jpg";
import bracelet from "../images/bracelet.jpg";
import watch from "../images/watch.jpg";
import necklace from "../images/necklace.jpg";
import bag from "../images/bag.jpg";
import shoe from "../images/shoe.jpg";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
const Categories = () => {
  const collectionsOne = [
    {
      name: "rings",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: rings,
    },
    {
      name: "bracelets",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: bracelet,
    },
    {
      name: "necklaces",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: necklace,
    },
  ];
  const collectionsTwo = [
    {
      name: "watches",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: watch,
    },
    {
      name: "bags",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: bag,
    },
    {
      name: "shoes",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: shoe,
    },
  ];
  return (
    <div className="bg-pry-50 px-24 py-32 flex flex-col space-y-12 justify-center items-center w-full ">
      <HeadingThree color="pry-100" title="Categories For You" />

      <div className="flex flex-col space-y-12">
        <div className="flex justify-between space-x-12 w-full">
          {collectionsOne.map((collection, index) => {
            return (
              <div
                className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8"
                key={index}
              >
                <div className=" border-b-4 border-b-pry-100">
                  <img
                    src={collection.image}
                    alt="Earrings"
                    className="h-64 w-full"
                  />
                </div>
                <div className="flex-col justify-center items-center space-y-8">
                  <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                    {collection.name}
                  </p>
                  <p className="font-heading text-gold text-base text-center">
                    {collection.description}
                  </p>
                  <PrimaryButton title="Browse collection" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between space-x-12 w-full">
          {collectionsTwo.map((collection, index) => {
            return (
              <div
                className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8"
                key={index}
              >
                <div className=" border-b-4 border-b-pry-100">
                  <img src={collection.image} alt="Earrings" />
                </div>
                <div className="flex-col justify-center items-center space-y-8">
                  <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                    {collection.name}
                  </p>
                  <p className="font-heading text-gold text-base text-center">
                    {collection.description}
                  </p>
                  <PrimaryButton title="Browse collection" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
