import React from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import earrings from "../images/earrings.jpg";
import rings from "../images/rings.jpg";
import watch from "../images/watch.jpg";
import necklace from "../images/necklace.jpg";
import bag from "../images/bag.jpg";
import shoe from "../images/shoe.jpg";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import { FadeUpAnimation } from "../components/UI/Animations/Animations";
const Categories = () => {
  const collectionsOne = [
    {
      name: "rings",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: rings,
      path: "/products/rings",
    },
    {
      name: "necklaces",
      description:
        "The collection of bespoke necklaces fabricated with the rarest metals to exude elegance on the bearer.",
      image: necklace,
      path: "/products/necklaces",
    },
    {
      name: "earrings",
      description:
        "The collection of bespoke earrings fabricated with the rarest metals to exude elegance on the bearer.",
      image: earrings,
      path: "/products/earrings",
    },
  ];
  const collectionsTwo = [
    {
      name: "watches",
      description:
        "The collection of bespoke watches fabricated with the rarest materials to exude elegance on the bearer.",
      image: watch,
      path: "/products/watches",
    },
    {
      name: "bags",
      description:
        "The collection of bespoke  bags fabricated with the rarest materials to exude elegance on the bearer.",
      image: bag,
      path: "/products/bags",
    },
    {
      name: "shoes",
      description:
        "The collection of bespoke shoes fabricated with the rarest materials to exude elegance on the bearer.",
      image: shoe,
      path: "/products/shoes",
    },
  ];
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-32 flex flex-col flex-wrap space-y-12 justify-center items-center w-full ">
      <HeadingThree color="pry-100" title="Categories For You" />

      <div className="flex flex-col space-y-0 md:space-y-12">
        <FadeUpAnimation className="flex justify-between flex-col md:flex-row md:space-x-12 w-full">
          {collectionsOne.map((collection, index) => {
            return (
              <div
                className="flex flex-col md:w-2/5 w-full space-y-2 mb-6 bg-pry-100 px-4 md:px-8 py-8"
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
                  <PrimaryButton
                    title="Browse collection"
                    path={collection.path}
                  />
                </div>
              </div>
            );
          })}
        </FadeUpAnimation>
        <FadeUpAnimation className="hidden md:flex justify-between flex-col md:flex-row md:space-x-12 w-full">
          {collectionsTwo.map((collection, index) => {
            return (
              <div
                className="flex flex-col w-full md:w-2/5 space-y-2 mb-6 bg-pry-100 px-4 md:px-8 py-8"
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
                  <PrimaryButton
                    title="Browse collection"
                    path={collection.path}
                  />
                </div>
              </div>
            );
          })}
        </FadeUpAnimation>
      </div>
    </div>
  );
};

export default Categories;
