import React from "react";
import cartImage from "../images/earrings.jpg";
import {
  HeadingTwo,
  ParagraphLarge,
} from "../components/UI/FontStyles/FontStyles";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";

const Cart = () => {
  return (
    <div className="bg-pry-50 px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Cart
      </p>
      <HeadingTwo
        title="Cart"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <div className=" w-full  flex flex-col space-y-8">
        <p className="text-pry-100  font-body text-xl font-medium ">
          Your cart items (2)
        </p>
        <div className="flex justify-between w-full space-x-24">
          <div className="flex flex-col w-3/5">
            <div className="flex space-x-4 py-4 border-b border-b-pry-100">
              <div className="w-4/5 ">
                <img src={cartImage} alt="cart item" />
              </div>
              <div className="flex flex-col w-full justify-between">
                <div className="flex justify-between">
                  <p className="text-pry-100  font-heading text-lg font-medium ">
                    Fossil wristwatch
                  </p>
                  <button className="text=pry-100 font-body text-base">
                    Delete
                  </button>
                </div>
                <p className="text-pry-100  font-body text-base font-normal ">
                  Material: Leather
                </p>

                <p className="text-pry-100  font-body text-base font-normal ">
                  Color: Green
                </p>
                <div className="flex justify-between">
                  <button className="border border-pry-100 w-2/5  px-4 flex justify-between font-body text-lg text-pry-100">
                    <span>+</span>
                    <span>4</span>
                    <span>-</span>
                  </button>
                  <p className="text-pry-100  font-body text-lg font-bold">
                    $450
                  </p>
                </div>

                <NavLink
                  className="text-pry-100 flex space-x-2 text-sm fontb items-center"
                  to="product/:id"
                >
                  <InfoIcon /> <span>Product details</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="bg-pry-100 border border-gold w-2/5 py-12 px-6 space-y-12 flex flex-col h-4/5 justify-start ">
            <div className="flex justify-between">
              <ParagraphLarge> Order value:</ParagraphLarge>
              <ParagraphLarge> $450</ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Delivery:</ParagraphLarge>
              <ParagraphLarge>$84</ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Total:</ParagraphLarge>
              <ParagraphLarge>$848</ParagraphLarge>
            </div>
            <PrimaryButton title="Procced to checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
