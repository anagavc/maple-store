import React, { useState } from "react";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
import { NavLink, useLocation } from "react-router-dom";
import AllProducts from "../components/Layouts/AllProducts";
const Shop = () => {
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log(filters);
  };
  const reset = (e) => {
    setSort();
    setFilters({});
  };
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <div className="flex space-x-2">
        <NavLink
          to="/"
          className="text-pry-100  font-body text-base font-medium hover:text-grey transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/products/allProducts"
          className="text-pry-100  font-body text-base font-medium hover:text-grey transition duration-300 "
        >
          &gt; Products
        </NavLink>
      </div>

      {path !== "allProducts" ? (
        <HeadingTwo
          title={path.toUpperCase()}
          color="text-pry-100"
          size="text-3xl tracking-loose"
        />
      ) : (
        <HeadingTwo
          title="All Products"
          color="text-pry-100"
          size="text-3xl tracking-loose"
        />
      )}
      <div className="flex flex-col  space-y-4 md:space-y-12 justify-between">
        <div className="flex  flex-col">
          <label
            className="font-body text-base text-pry-100"
            htmlFor="category"
          >
            Filter by:
          </label>
          <div className="flex justify-between w-full space-y-4 md:space-x-4  md:space-y-0 md:w-4/5 flex-col md:flex-row">
            {path === "allProducts" && (
              <select
                className="border border-pry-100 md:w-2/5 text-pry-100 px-6 capitalize hover:bg-pry-100 hover:text-gold py-2 bg-pry-50 transition duration-300 ease-in"
                name="category"
                id="category"
                onChange={handleFilters}
              >
                <option disabled>Category</option>
                <option>rings</option>
                <option>necklaces</option>
                <option>shoes</option>
                <option>bags</option>
                <option>watches</option>
                <option>earrings</option>
              </select>
            )}

            <select
              className="border border-pry-100 md:w-2/5 text-pry-100 px-6 hover:bg-pry-100 hover:text-gold py-2 bg-pry-50 transition duration-300 ease-in"
              name="sort"
              id="sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="oldest">Oldest</option>
              <option value="newest">Newest</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
              <option value="lowest">Highest to lowest prices</option>
              <option value="highest">Lowest to highest prices</option>
            </select>
            <button
              onClick={reset}
              className="text-pry-100 text-base border-b border-b-pry-100 px-4 py-2 md:w-2/5 hover:text-red-100 hover:border-b-red-100 transition duration-300 ease-in"
            >
              Clear filters
            </button>
          </div>
        </div>
        <AllProducts filters={filters} sort={sort} />
      </div>
    </div>
  );
};

export default Shop;
