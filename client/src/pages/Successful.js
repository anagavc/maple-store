import { ArrowRightAlt, AssignmentTurnedIn } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../api/requests";
import { paidProduct } from "../redux/cartSlice";

const Successful = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = location.state.data;
  const cart = location.state.cart;
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    data === undefined && navigate("/");
    const delivery = cart.total > 5000 ? 0 : cart.total / 100;
    const totalAmount = cart.total + delivery;
    const createOrder = async () => {
      try {
        await publicRequest.post("orders", {
          userId: user._id,
          amount: totalAmount,
          address: data.billing_details.address,
          name: data.billing_details.name,
          products: cart.products.map((product) => ({
            productId: product,
          })),
        });
        data && dispatch(paidProduct());
        console.log("done");
      } catch (error) {
        console.log(error);
      }
    };
    data && createOrder();
  }, []);

  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-center items-center  w-full space-y-4">
      <div className="bg-pry-100  drop-shadow flex flex-col items-center w-3/5 space-y-8 justify-center  py-16 border-2 border-gold">
        <span className="text-gold">
          <AssignmentTurnedIn sx={{ fontSize: 56 }} />
        </span>
        <h2 className="text-gold text-2xl font-body">
          Your payment was successful{" "}
        </h2>

        <p className="font-body  text-gold text-md">
          Your order has been processed successfully. Thank you for shopping
          with us.
        </p>
        <a
          href={data?.receipt_url}
          target="_blank"
          className="text-gold text-base font-body hover:text-pry-50 px-4 py-2 flex justify-center items-center w-64 transition duration-300 "
        >
          View receipt <ArrowRightAlt />
        </a>
        <div className="flex justify-between items-center space-x-8">
          <NavLink
            className="text-gold font-body text-base hover:text-pry-50"
            to="/orders"
          >
            View orders
          </NavLink>
          <NavLink
            className=" border border-gold text-gold py-2 px-8 font-body text-base hover:bg-gold hover:text-pry-100 transition duration-300"
            to="/products/allProducts"
          >
            Shop more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Successful;
