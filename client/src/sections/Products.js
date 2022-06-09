import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../api/requests";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import watch from "../images/watch2.png";
import { addProduct } from "../redux/cartSlice";
import { getProducts } from "../api/apiCalls";
const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const items = [
    { name: "All" },
    { name: "Rings" },
    { name: "Necklaces" },
    { name: "Watches" },
    { name: "Bracelets" },
    { name: "Bags" },
    { name: "Shoes" },
  ];
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-pry-100 px-8 md:px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full ">
      <HeadingThree title="Our Products" color="gold" />
      <div className="flex justify-center w-full md:items-center flex-wrap md:flex-nowrap">
        {items.map((item, index) => {
          return (
            <button
              key={index}
              className="bg-pry-100 tracking-widest w-2/5 m-2 md:m-0 border-gold border md:border-0 flex justify-center md:w-full text-gold   font-body p-2  md:py-4 md:px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300"
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="flex  justify-between flex-col md:flex-row w-full md:flex-wrap">
        {products.map((product, index) => {
          return (
            <div
              className="flex flex-col justify-between space-y-8  w-full md:w-96  mb-24 border border-gold p-4 "
              key={index}
            >
              <div className="bg-gold p-4  w-full flex justify-center items-center">
                <img
                  src={product.img}
                  className="W-full  bg-pry-100"
                  alt="product"
                />
              </div>
              <p className="tracking-widest font-body  text-gold text-base">
                {product.category}
              </p>
              <div className="flex justify-between">
                <p className="font-heading  text-gold text-lg">
                  {product.title}
                </p>
                <p className="tracking-widest font-body  text-gold text-base font-bold">
                  ${product.price}
                </p>
              </div>

              <PrimaryButton
                title="Add to cart"
                onClick={() => {
                  dispatch(addProduct({ ...product, quantity }));
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
