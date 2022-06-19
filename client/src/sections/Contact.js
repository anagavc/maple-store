import React, { useState } from "react";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";

import CommentIcon from "@mui/icons-material/Comment";
import { publicRequest } from "../api/requests";
import Modal from "../components/UI/Modal/Modal";

const Contact = () => {
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
  const contactDetails = [
    {
      icon: <LocationCityIcon />,
      name: "our office address",
      info: "    No.2 Shelter Afrique, Uyo,AkwaIbom State",
    },
    {
      icon: <QuestionAnswerIcon />,
      name: "Let us talk",
      info: "+234-123-4567-890",
    },
    {
      icon: <EmailIcon />,
      name: "Mail us",
      info: "support@maplestores.com",
    },
    {
      icon: <LanguageIcon />,
      name: "Our website",
      info: "www.maplestores.netlify.com",
    },
  ];

  const onSubmit = async (data) => {
    try {
      setLoad(true);
      await publicRequest.post("/enquiry", { ...data });
      setShowNotification(true);
      setLoad(false);
      reset(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-pry-100 px-8 md:px-24 py-24 flex flex-col space-y-8 justify-center items-center w-full ">
      {showNotification && (
        <Modal
          message="Thank you for your enquiry,we will get back to you as soon as possible."
          onClose={() => setShowNotification(false)}
        />
      )}
      <HeadingThree title="Contact Us" color="gold" />
      <div className="font-body text-lg text-gold  text-justify tracking-widest">
        Do you want to make an enquiry? We will be delighted to hear it. Drop us
        a line below, we'd love to talk to you.
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:flex-1 ">
        <div className="flex flex-wrap justify-between h-full gap-6 mt-8 md:mt-0">
          {contactDetails.map((detail, index) => {
            return (
              <div className="flex flex-col space-y-4 w-72" key={index}>
                <div className="bg-pry-100 w-8 h-8 text-gold flex justify-center items-center px-4 py-4">
                  {detail.icon}
                </div>
                <h5 className="font-body uppercase tracking-widest font-medium text-gold">
                  {detail.name}
                </h5>
                <p className="font-body text-base text-gold">{detail.info}</p>
              </div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-12 w-full "
        >
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
                id="email"
                name="email"
                className="py-3 px-4 w-full tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-gold text-gold placeholder:text-gold  appearance-none transition duration-300 focus:outline-none focus:border-gold focus:ring-gold focus:ring-1 "
                placeholder="Your email address"
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 4,
                    message: "Email must be more than 4 characters",
                  },
                })}
              />
            </label>
            <p className="text-red-100 font-normal text-sm font-body">
              {errors["email"] && errors["email"].message}
            </p>
          </div>
          <div className="flex flex-col">
            <label
              className="relative text-gold focus-within:text-gold block"
              key="name"
            >
              <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                <PersonIcon />
              </span>

              <input
                type="text"
                id="name"
                name="name"
                className="py-3 px-4 w-full tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-gold text-gold placeholder:text-gold  appearance-none transition duration-300 focus:outline-none focus:border-gold focus:ring-gold focus:ring-1 "
                placeholder="Your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Name must be more than 4 characters",
                  },
                })}
              />
            </label>
            <p className="text-red-100 font-normal text-sm font-body">
              {errors["name"] && errors["name"]?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label
              className="relative text-gold focus-within:text-gold block"
              key="comment"
            >
              <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                <CommentIcon />
              </span>

              <input
                type="text"
                id="comment"
                name="comment"
                className="py-3 px-4 w-full tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-gold text-gold placeholder:text-gold  appearance-none transition duration-300 focus:outline-none focus:border-gold focus:ring-gold focus:ring-1 "
                placeholder="Your comment"
                {...register("comment", {
                  required: "A comment is required",
                  minLength: {
                    value: 4,
                    message: "Comment must be more than 4 characters",
                  },
                })}
              />
            </label>
            <p className="text-red-100 font-normal text-sm font-body">
              {errors["comment"] && errors["comment"]?.message}
            </p>
          </div>

          {load ? (
            <button
              type="submit"
              className=" flex   justify-center items-center space-x-4  w-full text-pry-100 border border-gold font-body py-4 px-8  bg-gold :text-pry-100 font-medium transition duration-300"
            >
              <ClipLoader color={color} loading={loading} size={25} />
              <span>Sending</span>
            </button>
          ) : (
            <button
              type="submit"
              className=" flex justify-center w-full text-gold border border-gold font-body py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300"
            >
              Send message
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
