import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getOrders } from "../api/apiCalls";
import { TableHeader, TableItem } from "../components/UI/FontStyles/FontStyles";
import { formatAmount } from "../utils/formatAmount";
import { formatDate } from "../utils/formatDate";
const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = useSelector((state) => state.user.currentUser._id);
  useEffect(() => {
    getOrders(userID, dispatch);
  }, [dispatch, userID]);
  const order = useSelector((state) => state.order.orders);
  const tableHeaders = ["Order No.", "Date", "Amount", "Status"];
  return (
    <div className="w-full bg-pry-50 items-center justify-center flex-col flex h-full py-24">
      <h2 className="text-center text-pry-100 font-bold text-2xl mb-6 font-body">
        Order History
      </h2>
      <>
        {order?.length === 0 ? (
          <TableItem>You do not have any orders</TableItem>
        ) : (
          <>
            <div className="flex w-4/5 justify-center bg-gold items-center border px-4 lg:px-2 py-2 border-pry-100">
              {tableHeaders.map((header) => (
                <TableHeader>{header}</TableHeader>
              ))}
            </div>
            {order?.map((order) => (
              <div
                key={order._id}
                onClick={() => {
                  navigate(`/order/${order._id}`);
                }}
                className="flex w-4/5 py-2 justify-center  even:bg-gold items-center text-pry-100 text-base hover:cursor-pointer border-b border-x border-x-pry-100 border-b-pry-100 hover:bg-pry-100 hover:text-gold transition duration-300"
              >
                <TableItem>#{order._id.substring(0, 8)}</TableItem>
                <TableItem>{formatDate(order.createdAt)}</TableItem>
                <TableItem>{formatAmount(order.amount)}</TableItem>
                <TableItem>{order.status}</TableItem>
              </div>
            ))}
          </>
        )}
      </>
    </div>
  );
};

export default OrderHistory;
