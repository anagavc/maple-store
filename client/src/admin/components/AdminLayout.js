import React, { useState } from "react";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import UpdateProduct from "../pages/UpdateProduct";
import UpdateOrderStatus from "../pages/UpdateOrderStatus";
import ProductGrid from "../pages/ProductGrid";
import Enquiries from "../pages/Enquiries";
import Subscribers from "../pages/Subscribers";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="h-full flex flex-1 overflow-hidden w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex flex-col flex-1 bg-pry-50  ">
        <Header setIsOpen={setIsOpen} />
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="lg:px-12 px-0 pb-10">
            <Routes>
              <Route path="dashboard/" element={<Dashboard />} />

              <Route path="/products/*" element={<ProductGrid />} />
              <Route path="/addProduct" element={<AddProduct />}></Route>
              <Route path="/product/:id" element={<UpdateProduct />}></Route>
              <Route
                path="/orderItem/:id"
                element={<UpdateOrderStatus />}
              ></Route>
              <Route path="/orders" element={<Orders />} />
              <Route path="/enquiries" element={<Enquiries />} />
              <Route path="/subscribers" element={<Subscribers />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
