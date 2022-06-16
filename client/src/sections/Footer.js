import React, { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
import { publicRequest } from "../api/requests";
import Modal from "../components/UI/Modal/Modal";
import ClipLoader from "react-spinners/ClipLoader";
const Footer = () => {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        {
          name: "Wristwatch",
          path: "products/watches",
        },
        {
          name: "Necklaces",
          path: "products/necklaces",
        },
        {
          name: "Bracelets",
          path: "products/bags",
        },
        {
          name: "Earrings",
          path: "products/earrings",
        },
        {
          name: "Rings",
          path: "products/rings",
        },
        {
          name: "Rings",
          path: "products/shoes",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Shop",
          path: "products/allProducts",
        },
        {
          name: "Categories",
          path: "categories",
        },
        {
          name: "Login",
          path: "login",
        },
        {
          name: "Register",
          path: "register",
        },
      ],
    },
  ];
  let loading = true;
  let color = "#1e3330";
  const [load, setLoad] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setLoad(true);
      await publicRequest.post("/subscription", { ...data });
      setShowNotification(true);
      setLoad(false);
      reset(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-pry-100 py-6  flex flex-col space-y-8 justify-between w-full ">
      {showNotification && (
        <Modal
          message="Thank you for your subscribing."
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="flex justify-between bg-pry-100 drop-shadow-lg py-4 px-8 md:px-24">
        <p className="font-heading text-xl md:text-2xl tracking-widest text-gold uppercase">
          Maple Stores
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12">
          <h5 className="hidden md:block font-body uppercase tracking-widest font-medium text-base text-gold">
            follow us on
          </h5>
          <div className="flex justify-between  items-center space-x-4 md:space-x-6 ">
            <Link
              to="www.facebook.com/"
              className="text-gold hover:text-pry-50 transition duration-300"
            >
              <FacebookOutlinedIcon />
            </Link>
            <Link
              to="../https://www.instagram.com"
              className="text-gold hover:text-pry-50 transition duration-300"
            >
              <InstagramIcon />
            </Link>
            <Link
              to="../https://www.twitter.com"
              className="text-gold hover:text-pry-50 transition duration-300"
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-24">
        <div className="flex flex-col md:flex-row  justify-center space-y-6 md:space-y-0 md:justify-between w-full">
          {footerLinks.map((link, index) => (
            <div
              className="flex flex-col justify-between space-y-6 md:space-y-4"
              key={index}
            >
              <h6 className="font-body md:tracking-widest  text-2xl md:text-xl text-gold">
                {link.title}
              </h6>
              {link.links.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className="text-gold hover:text-pry-50 transition font-body text-base duration-300"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          ))}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between w-full md:w-3/5 mt-6 md:mt-0 space-y-8 md:space-y-0 "
          >
            <h6 className="font-body tracking-widest   text-xl text-gold">
              Subscribe to our newsletter
            </h6>
            <p className="text-gold  font-body text-base text-center md:text-left">
              Signup to get the latest discount and information on our products
              &amp; services
            </p>
            <div className="flex flex-col">
              <label
                className="relative text-gold focus-within:text-gold block"
                key="Email address"
              >
                <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                  <EmailIcon />
                </span>

                <input
                  type="text"
                  id="subscriberEmail"
                  name="email"
                  className="py-3 px-4 w-full tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-gold text-gold placeholder:text-gold  appearance-none transition duration-300 focus:outline-none focus:border-gold focus:ring-gold focus:ring-1 "
                  placeholder="Your email address"
                  {...register("subscriberEmail", {
                    required: "Your email address is required, thank you",
                    minLength: {
                      value: 4,
                      message: "Email must be more than 4 characters",
                    },
                  })}
                />
              </label>
              <p className="text-gold font-normal text-sm font-body">
                {errors["email"] && errors["email"].message}
              </p>
            </div>
            {load ? (
              <button className=" flex items-center justify-center w-full bg-gold text-pry-100 md:border  font-body py-4 px-4 hover:bg-pry-50   hover:text-pry-100 font-medium transition duration-300">
                <ClipLoader color={color} loading={loading} size={25} />
                Subscribing
              </button>
            ) : (
              <button className=" flex justify-center w-full bg-gold text-pry-100 md:border  font-body py-4 px-4 hover:bg-pry-50   hover:text-pry-100 font-medium transition duration-300">
                Subscribe
              </button>
            )}
          </form>
        </div>
      </div>
      <p className="text-gold md:px-24 font-body text-base  text-center md:text-justify pt-8">
        Copyright &copy; Maple Stores 2022
      </p>
    </div>
  );
};

export default Footer;
