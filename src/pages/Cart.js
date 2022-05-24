import React from "react";
import cartImage from "../images/earrings.jpg";
import {
  HeadingThree,
  HeadingTwo,
  ParagraphLarge,
} from "../components/UI/FontStyles/FontStyles";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { Add, DeleteOutlineOutlined } from "@mui/icons-material";

const Cart = () => {
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
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
        <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-x-24">
          <div className="flex flex-col w-full md:w-3/5 space-y-6">
            {/* this is the beginning of a cart item */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 py-4 border-b border-b-pry-100">
              <div className="md:w-4/5 w-full">
                <img src={cartImage} alt="cart item" />
              </div>
              <div className="flex flex-col w-full space-y-6 justify-between">
                <div className="flex flex-row justify-between">
                  <p className="text-pry-100  font-heading text-lg font-medium ">
                    Fossil wristwatch
                  </p>
                  <button className="text-pry-100 font-body text-base">
                    <DeleteOutlineOutlined />
                  </button>
                </div>
                <p className="text-pry-100  font-body text-base font-normal ">
                  Material: Leather
                </p>

                <p className="text-pry-100  font-body text-base font-normal ">
                  Color: Green
                </p>
                <div className="flex justify-between flex-col-reverse md:flex-row ">
                  <button className="border border-pry-100 md:w-2/5 py-2 px-4 flex justify-between font-body text-lg text-pry-100">
                    <span>
                      <Add />
                    </span>
                    <span>4</span>
                    <span>-</span>
                  </button>
                  <p className="text-pry-100 mb-6 md:mb-0 font-body text-lg font-bold">
                    Price: $450
                  </p>
                </div>

                <NavLink
                  className="text-pry-100 flex space-x-2 text-lg  items-center"
                  to="product/:id"
                >
                  <InfoIcon /> <span>Product details</span>
                </NavLink>
              </div>
            </div>
            {/* end of a cart item */}
          </div>
          <div className="bg-pry-100 border border-gold w-full md:w-2/5 py-12 px-6 md:px-12 space-y-12 flex flex-col h-4/5 justify-start ">
            <HeadingThree color="gold" title="Order summary" />
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
