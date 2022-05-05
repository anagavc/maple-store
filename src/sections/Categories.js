import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import rings from "../images/earrings.jpg";
import bracelet from "../images/bracelet.jpg";
import watch from "../images/watch.jpg";
const Categories = () => {
  const collectionsOne = [
    {
      name: "rings",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: { rings },
    },
    {
      name: "bracelets",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: { rings },
    },
    {
      name: "necklaces",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: { rings },
    },
  ];
  const collectionsTwo = [
    {
      name: "watches",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: { rings },
    },
    {
      name: "bags",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: { rings },
    },
    {
      name: "shoes",
      description:
        "The collection of bespoke rings fabricated with the rarest metals to exude elegance on the bearer.",
      image: { rings },
    },
  ];
  return (
    <div className="bg-pry-50 px-24 py-32 flex flex-col space-y-12 justify-center items-center w-full ">
      <div className="border-b border-b-pry-100 w-full flex justify-center">
        <h3 className="font-heading text-3xl   text-pry-100 mb-4">
          Categories for you
        </h3>
      </div>
      <div className="flex flex-col space-y-12">
        <div className="flex justify-between space-x-12 w-full">
          <div className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8">
            <div className=" border-b-4 border-b-pry-100">
              <img src={earrings} alt="Earrings" />
            </div>
            <div className="flex-col justify-center items-center space-y-8">
              <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                rings
              </p>
              <p className="font-heading text-gold text-base text-center">
                The collection of bespoke rings fabricated with the rarest
                metals to exude elegance on the bearer.
              </p>
              <PrimaryButton title="Browse collection" />
            </div>
          </div>
          <div className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8">
            <div className=" border-b-4 border-b-pry-100">
              <img src={bracelet} alt="Earrings" />
            </div>
            <div className="flex-col justify-center items-center space-y-8">
              <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                Bracelets
              </p>
              <p className="font-heading text-gold text-base text-center">
                The collection of bespoke rings fabricated with the rarest
                metals to exude elegance on the bearer.
              </p>
              <PrimaryButton title="Browse collection" />
            </div>
          </div>
          <div className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8 ">
            <div className=" border-b-4 border-b-pry-100 ">
              <img src={watch} alt="Earrings" />
            </div>
            <div className="flex-col justify-center items-center space-y-8">
              <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                Wristwatches
              </p>
              <p className="font-heading text-gold text-base text-center">
                The collection of bespoke rings fabricated with the rarest
                metals to exude elegance on the bearer.
              </p>
              <PrimaryButton title="Browse collection" />
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-12 w-full">
          <div className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8">
            <div className=" border-b-4 border-b-pry-100">
              <img src={earrings} alt="Earrings" />
            </div>
            <div className="flex-col justify-center items-center space-y-8">
              <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                rings
              </p>
              <p className="font-heading text-gold text-base text-center">
                The collection of bespoke rings fabricated with the rarest
                metals to exude elegance on the bearer.
              </p>
              <PrimaryButton title="Browse collection" />
            </div>
          </div>
          <div className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8">
            <div className=" border-b-4 border-b-pry-100">
              <img src={bracelet} alt="Earrings" />
            </div>
            <div className="flex-col justify-center items-center space-y-8">
              <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                Bracelets
              </p>
              <p className="font-heading text-gold text-base text-center">
                The collection of bespoke rings fabricated with the rarest
                metals to exude elegance on the bearer.
              </p>
              <PrimaryButton title="Browse collection" />
            </div>
          </div>
          <div className="flex flex-col w-2/5 space-y-4 bg-pry-100 px-8 py-8 ">
            <div className=" border-b-4 border-b-pry-100 ">
              <img src={watch} alt="Earrings" />
            </div>
            <div className="flex-col justify-center items-center space-y-8">
              <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
                Wristwatches
              </p>
              <p className="font-heading text-gold text-base text-center">
                The collection of bespoke rings fabricated with the rarest
                metals to exude elegance on the bearer.
              </p>
              <PrimaryButton title="Browse collection" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
