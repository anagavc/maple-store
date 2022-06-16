import { useEffect, useState } from "react";
import {
  HeadingThree,
  HeadingTwo,
  ParagraphLarge,
} from "../components/UI/FontStyles/FontStyles";

import { formatAmount } from "../utils/formatAmount";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton, {
  CartButton,
  BackButton,
} from "../components/UI/Buttons/PrimaryButton";
import { Add, DeleteOutlineOutlined, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductQuantity,
  removeProduct,
  subtractProductQuantity,
} from "../redux/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../api/requests";
import Loader from "../components/Layouts/Loader";

const KEY =
  "pk_test_51L55AVLWy6VIx3BFpE3XvMg8anotWAGRRbYq1EJPUB2sIfLSz5iKNbIwYtHo1ltutBtzhHwZxExD5S8B46NHoE7H00YUizf8Gg";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);

  //handle increment and reduction of quantity
  const handleQuantity = (type, product) => {
    const price = product.price;
    if (type === "Add" && product.quantity < 10) {
      dispatch(addProductQuantity({ product, price }));
    } else if (type === "Subtract" && product.quantity > 1) {
      dispatch(subtractProductQuantity({ product, price }));
    }
  };
  //remove item from cart
  const handleRemoveCartItem = (product) => {
    const price = product.price;
    const quantity = product.quantity;
    dispatch(removeProduct({ product, price, quantity }));
  };

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      setLoading(true);
      try {
        const res = await userRequest.post("checkout", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        const data = res.data;
        const cartState = { data, cart };
        setLoading(false);
        navigate("/successful", { state: cartState, replace: true });
      } catch (err) {
        console.log(err.message);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate, cart.total, cart, dispatch]);
  const deliveryFee = cart.total > 5000 ? 0 : cart.total / 100;
  const totalAmount = cart.total + deliveryFee;
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
      {loading ? (
        <Loader payment={true} />
      ) : cart.products.length === 0 ? (
        <div className="flex flex-col justify-between items-center space-y-4 py-12  w-full mb-24 bg-pry-100 p-4 text-gold font-body">
          <span>You currently do not have any item in your cart yet</span>
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <NavLink
              className="  text-gold py-2 px-12 font-body text-md border  hover:bg-gold hover:text-pry-100 transition duration-300"
              to="/products/allProducts"
            >
              Explore
            </NavLink>
          </div>
        </div>
      ) : (
        <div className=" w-full  flex flex-col space-y-8">
          <p className="text-pry-100  font-body text-xl font-medium ">
            Your cart items ({cart.quantity})
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-x-24">
            <div className="flex flex-col w-full md:w-3/5 space-y-6">
              {/* this is the beginning of a cart item */}
              {cart.products.map((product) => (
                <div
                  className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-4 border-b border-b-pry-100"
                  key={product._id}
                >
                  <div className="md:w-80 w-80 h-80">
                    <img src={product.img} alt="cart item" />
                  </div>
                  <div className="flex flex-col w-full space-y-4 md:space-y-6">
                    <div className="flex flex-row justify-between">
                      <p className="text-pry-100  font-heading text-xl font-medium ">
                        {product.title}
                      </p>
                      <button
                        className="text-pry-100 font-body text-base hover:text-red-200"
                        onClick={() => handleRemoveCartItem(product)}
                      >
                        <DeleteOutlineOutlined />
                      </button>
                    </div>
                    <p className="text-pry-100  font-body text-base font-normal ">
                      Material: {product.material}
                    </p>

                    <p className="text-pry-100  font-body text-base font-normal ">
                      Category: {product.category}
                    </p>
                    <p className="text-pry-100  font-body text-base font-normal ">
                      Price: ${product.quantity * product.price}
                    </p>
                    <div className="flex space-x-2">
                      <CartButton
                        click={() => handleQuantity("Subtract", product)}
                      >
                        <Remove />
                      </CartButton>
                      <span className="border border-pry-100 w-12 flex justify-center transition duration-300 items-center bg-pry-50 text-pry-100">
                        {product.quantity}
                      </span>
                      <CartButton click={() => handleQuantity("Add", product)}>
                        <Add />
                      </CartButton>
                    </div>

                    <NavLink
                      className="text-pry-100 flex space-x-2 text-base  font-body items-center"
                      to={`/product/${product._id}`}
                    >
                      <InfoIcon /> <span>Product information</span>
                    </NavLink>
                  </div>
                </div>
              ))}

              {/* end of a cart item */}
            </div>
            <div className="bg-pry-100 border border-gold w-full md:w-2/5 py-12 px-6 md:px-12 space-y-12 flex flex-col h-4/5 justify-start ">
              <HeadingThree color="gold" title="Order summary" />
              <div className="flex justify-between">
                <ParagraphLarge> Subtotal</ParagraphLarge>
                <ParagraphLarge>
                  {cart.quantity === 0 ? "--" : formatAmount(cart.total)}
                </ParagraphLarge>
              </div>
              <div className="flex justify-between">
                <ParagraphLarge>Delivery Fee:</ParagraphLarge>

                <ParagraphLarge>
                  {cart.quantity === 0
                    ? "--"
                    : cart.total > 5000
                    ? "Free"
                    : cart.total / 100}
                </ParagraphLarge>
              </div>
              <div className="flex justify-between">
                <ParagraphLarge>Total:</ParagraphLarge>
                <ParagraphLarge>
                  {cart.quantity !== 0 && cart.total < 5000
                    ? formatAmount(totalAmount)
                    : cart.quantity === 0
                    ? formatAmount(0)
                    : formatAmount(totalAmount)}
                </ParagraphLarge>
              </div>
              <StripeCheckout
                name="Maple Store"
                image="https://i.ibb.co/7gnqD5j/aylo.png"
                billingAddress
                shippingAddress
                description={`Your total is ${formatAmount(totalAmount)}`}
                amount={totalAmount * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <PrimaryButton title="Checkout" />
              </StripeCheckout>
            </div>
          </div>
        </div>
      )}
      <BackButton
        click={() => {
          navigate(-1);
        }}
        title="Back to products"
      />
    </div>
  );
};

export default Cart;
