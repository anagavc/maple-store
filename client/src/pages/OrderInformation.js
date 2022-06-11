import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import { formatAmount } from "../utils/formatAmount";
import {
  ParagraphLarge,
  HeadingThree,
} from "../components/UI/FontStyles/FontStyles";
import { ArrowRightAlt } from "@mui/icons-material";
const OrderInformation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderID = location.pathname.split("/").at(-1);
  const orders = useSelector((state) => state.order.orders);
  const item = orders.find((item) => item._id === orderID);
  const products = item.products;
  const status = item.status;
  const totalAmount = item.amount;
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <NavLink
        to="/orders"
        className="text-pry-100 flex items-center text-lg font-body hover:text-grey transition duration-300"
      >
        <ArrowRightAlt style={{ transform: "rotate(180deg" }} /> Back
      </NavLink>
      <p className="text-pry-100  font-body text-xl font-bold f">
        Order #{item._id.substring(0, 8)}
      </p>

      <div className=" w-full  flex flex-col space-y-8">
        <p className="text-pry-100  font-body text-lg font-medium ">
          {item.length > 1 ? "Ordered Items" : "Order Item"}
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-x-24">
          <div className="flex flex-col w-full md:w-3/5 space-y-6">
            {/* this is the beginning of a cart item */}
            {products?.map((product) => (
              <div
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-2 border-b border-b-pry-100"
                key={
                  product.productId._id +
                  product.productId.material +
                  product.productId.color
                }
              >
                <div className="md:w-80 ">
                  <img src={product.productId.img} alt="cart item" />
                </div>
                <div className="flex flex-col w-full space-y-4 md:space-y-6">
                  <div className="flex flex-row justify-between">
                    <p className="text-pry-100 uppercase font-heading text-xl font-medium ">
                      {product.productId.title}
                    </p>
                  </div>
                  <p className="text-pry-100  font-body text-base font-normal ">
                    Material:{product.productId.material}
                  </p>

                  <p className="text-pry-100  font-body text-base font-normal ">
                    Category:{product.productId.category}
                  </p>
                  <p className="text-pry-100  font-body text-base font-normal ">
                    Price:{product.productId.quantity * product.productId.price}
                  </p>

                  <p className="text-pry-100  font-body text-base font-normal ">
                    Status: {status}
                  </p>
                </div>
              </div>
            ))}
            {/* end of a cart item */}
          </div>
          <div className="bg-pry-100 border border-gold w-full md:w-2/5 py-12 px-4 md:px-12 space-y-4 flex flex-col h-4/5 justify-start ">
            <HeadingThree color="gold" title="Billing summary" />
            <div className="flex justify-between">
              <ParagraphLarge> Billing Name</ParagraphLarge>
              <ParagraphLarge>{item.name}</ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Date</ParagraphLarge>

              <ParagraphLarge>{formatDate(item.createdAt)}</ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Zip</ParagraphLarge>
              <ParagraphLarge>{item.address.line1}</ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Address</ParagraphLarge>
              <ParagraphLarge>
                {item.address.city}, {item.address.postal_code}
              </ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge> Country</ParagraphLarge>
              <ParagraphLarge>{item.address.country}</ParagraphLarge>
            </div>

            <HeadingThree color="gold" title="Order summary" />

            <div className="flex justify-between">
              <ParagraphLarge>Sub Total</ParagraphLarge>

              <ParagraphLarge>
                {formatAmount(totalAmount - totalAmount / 100)}
              </ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Shipping</ParagraphLarge>
              <ParagraphLarge>{formatAmount(totalAmount / 100)}</ParagraphLarge>
            </div>
            <div className="flex justify-between">
              <ParagraphLarge>Total Amount</ParagraphLarge>
              <ParagraphLarge>
                {formatAmount(
                  totalAmount - totalAmount / 100 + totalAmount / 100
                )}
              </ParagraphLarge>
            </div>
          </div>
        </div>
      </div>
      <NavLink
        to="/orders"
        className="border border-pry-100 text-pry-100 text-base px-4 py-2 w-full md:w-3/5 flex items-center justify-center mt-6 hover:bg-pry-100 hover:text-pry-50 transition duration-300"
      >
        Back to Orders list
      </NavLink>
    </div>
  );
};

export default OrderInformation;
