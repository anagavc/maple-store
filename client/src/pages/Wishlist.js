import { useDispatch, useSelector } from "react-redux";
import Notifications from "../components/UI/Notifications/Notifications";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import { NavLink } from "react-router-dom";
import { addProduct } from "../redux/cartSlice";
import { updateWishlistProducts } from "../api/apiCalls";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { publicRequest } from "../api/requests";
import { FadeUpAnimation } from "../components/UI/Animations/Animations";
const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const user = useSelector((state) => state.user.currentUser);
  const wishlistID = useSelector((state) => state.wishlist.wishlistID);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProducts(res.data.filter((item) => wishlist.includes(item._id)));
      } catch (error) {
        console.log(Error);
      }
    };
    getProducts();
  }, [wishlist]);

  const [quantity, setQuantity] = useState(1);
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    const handleAddToWishlist = () => {
      const updatedWishlist = [...wishlist, productId];
      const newWishlist = { wishlist: updatedWishlist };
      setAdd(true);
      updateWishlistProducts(wishlistID, newWishlist, dispatch);
    };
    productId && handleAddToWishlist();
  }, [productId]);

  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col space-y-8  w-full ">
      <Notifications open={add} setOpen={setAdd} type="add" />
      <Notifications open={remove} setOpen={setRemove} type="remove" />
      <HeadingThree title="Wishlist" color="pry-100" />

      <div className="flex  justify-between flex-col md:flex-row w-full md:flex-wrap">
        {products.length === 0 ? (
          <div className="flex flex-col justify-between items-center space-y-4 py-12  w-full mb-24 bg-pry-100 p-4 text-gold font-body">
            <span>You currently do not have any item wishlisted yet</span>
            <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              <NavLink
                className="  text-gold py-2 px-12 font-body text-md border  hover:bg-gold hover:text-pry-100 transition duration-300"
                to="/shop"
              >
                Explore
              </NavLink>
            </div>
          </div>
        ) : (
          products.map((product, index) => {
            return (
              <FadeUpAnimation
                className="flex flex-col justify-between space-y-8  w-full md:w-96  mb-24 bg-pry-100 p-4 "
                key={index}
              >
                <div className="bg-gold p-4  w-full flex justify-center items-center">
                  <div className="bg-pry-100 w-full flex items-center justify-center">
                    <img
                      src={product.img}
                      className="W-52 h-52"
                      alt="product"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="tracking-widest font-body  text-gold text-base">
                    {product.category}
                  </p>
                  {user && (
                    <span className="text-gold cursor-pointer transition duration-500">
                      {wishlist.includes(product._id) ? (
                        <Favorite
                          onClick={() => {
                            const productIndex = wishlist.indexOf(product._id);
                            const updatedWishlist = [
                              ...wishlist.slice(0, productIndex),
                              ...wishlist.slice(productIndex + 1),
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
              </FadeUpAnimation>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Wishlist;
