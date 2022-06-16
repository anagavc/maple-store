import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

import { HeadingFour } from "../components/FontStyles";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateOrder } from "../../api/apiCalls";
import { useSelector } from "react-redux";
import Loader from "../../components/Layouts/Loader";

const UpdateOrderStatus = () => {
  const location = useLocation();
  const orderID = location.pathname.split("/")[3];
  const [loading, setLoading] = useState(false);

  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderID)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateOrder(orderID, data, dispatch, navigate);
  };

  const leftColumnInputs = [
    {
      name: "status",
      id: "status",
      type: "select",
      placeholder: "Select the delivery status of the product",
      options: [
        { value: "Shipped", name: "Shipped" },
        { value: "Delivered", name: "Delivered" },
      ],
      register: register,
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full justify-between space-y-4 px-6 lg:px-0">
          <div className="flex justify-start whitespace-pre items-center ">
            <HeadingFour>Dashboard</HeadingFour>
            <span className="text-grey-500 font-bold ">
              {" "}
              / Update Order #{order._id.substring(0, 8)}
            </span>
          </div>

          <form
            className="flex flex-col space-y-2 justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {leftColumnInputs.map((input, index) => (
              <Input
                name={input.name}
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                options={input.options}
                register={input.register}
                errors={input.errors}
              />
            ))}

            <div className="flex justify-between space-x-8  w-full">
              <PrimaryButton>Submit order</PrimaryButton>
              <SecondaryButton
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </SecondaryButton>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateOrderStatus;
