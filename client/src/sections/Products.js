import { useDispatch, useSelector } from "react-redux";
import Notifications from "../components/UI/Notifications/Notifications";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";

import { addProduct } from "../redux/cartSlice";
import { getProducts, updateWishlistProducts } from "../api/apiCalls";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
const Products = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const currentWishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlistID = useSelector((state) => state.wishlist.wishlistID);
  const products = useSelector((state) => state.product.products);
  const [productId, setProductId] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const categories = [
    "All",
    "rings",
    "necklaces",
    "watches",
    "earrings",
    "bags",
    "shoes",
  ];
  const filter = async (category) => {
    if (category === "All") {
      setFilteredProducts(products);
      return;
    }
    const filteredProduct = products.filter(
      (product) => product.category.toLowerCase() === category
    );

    setFilteredProducts(filteredProduct);
  };
  let quantity = 1;
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    const handleAddToWishlist = () => {
      const updatedWishlist = [...currentWishlist, productId];
      const newWishlist = { wishlist: updatedWishlist };
      setAdd(true);
      updateWishlistProducts(wishlistID, newWishlist, dispatch);
    };
    productId && handleAddToWishlist();
  }, [productId, currentWishlist, dispatch, wishlistID]);

  return (
    <div className="bg-pry-100 px-8 md:px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full ">
      <Notifications open={add} setOpen={setAdd} type="add" />
      <Notifications open={remove} setOpen={setRemove} type="remove" />
      <HeadingThree title="Our Products" color="gold" />
      <div className="flex justify-center w-full md:items-center flex-wrap md:flex-nowrap">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => filter(category)}
              className={`bg-pry-100 tracking-widest capitalize w-2/5 m-2 md:m-0 border-gold border md:border-0 flex justify-center md:w-full text-gold   font-body p-2  md:py-4 md:px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300 `}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="flex  justify-between flex-col md:flex-row w-full md:flex-wrap">
        {filteredProducts.length === 0
          ? products.slice(0, 6).map((product, index) => {
              return (
                <div
                  className="flex flex-col justify-between space-y-8  w-full md:w-96  mb-24 border border-gold p-4 "
                  key={product._id}
                >
                  <div className="bg-gold p-2  w-full flex justify-center items-center">
                    <div className="bg-pry-100 w-full flex items-center justify-center">
                      <img
                        src={product.img}
                        className="W-52 h-52"
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="tracking-widest font-body  text-gold text-base capitalize">
                      {product.category}
                    </p>
                    {user && (
                      <span className="text-gold cursor-pointer transition duration-500">
                        {currentWishlist.includes(product._id) ? (
                          <Favorite
                            onClick={() => {
                              const productIndex = currentWishlist.indexOf(
                                product._id
                              );
                              const updatedWishlist = [
                                ...currentWishlist.slice(0, productIndex),
                                ...currentWishlist.slice(productIndex + 1),
                              ];
                              const newWishlist = { wishlist: updatedWishlist };
                              updateWishlistProducts(
                                wishlistID,
                                newWishlist,
                                dispatch
                              );
                              setRemove(true);
                            }}
                          />
                        ) : (
                          <FavoriteBorderOutlined
                            onClick={() => {
                              setProductId(product._id);
                            }}
                          />
                        )}
                      </span>
                    )}
                  </div>

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
                      setAdd(true);
                    }}
                  />
                </div>
              );
            })
          : filteredProducts.slice(0, 6).map((product) => (
              <div
                className="flex flex-col justify-between space-y-8  w-full md:w-96  mb-24 border border-gold p-4 "
                key={product._id}
              >
                <div className="bg-gold p-2  w-full flex justify-center items-center">
                  <div className="bg-pry-100 w-full flex items-center justify-center">
                    <img
                      src={product.img}
                      className="W-52 h-52"
                      alt="product"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="tracking-widest font-body  text-gold text-base capitalize">
                    {product.category}
                  </p>
                  {user && (
                    <span className="text-gold cursor-pointer transition duration-500">
                      {currentWishlist.includes(product._id) ? (
                        <Favorite
                          onClick={() => {
                            const productIndex = currentWishlist.indexOf(
                              product._id
                            );
                            const updatedWishlist = [
                              ...currentWishlist.slice(0, productIndex),
                              ...currentWishlist.slice(productIndex + 1),
                            ];
                            const newWishlist = { wishlist: updatedWishlist };
                            updateWishlistProducts(
                              wishlistID,
                              newWishlist,
                              dispatch
                            );
                            setRemove(true);
                          }}
                        />
                      ) : (
                        <FavoriteBorderOutlined
                          onClick={() => {
                            setProductId(product._id);
                          }}
                        />
                      )}
                    </span>
                  )}
                </div>

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
            ))}
      </div>
    </div>
  );
};

export default Products;
