import React from "react";
import { HeadingThree } from "../components/UI/FontStyles/FontStyles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
const Contact = () => {
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

  const feedbackInputs = [
    {
      name: "Your email address",
      icon: <EmailIcon />,
    },
    {
      name: "Your name",
      icon: <PersonIcon />,
    },
    {
      name: "Your comment",
      icon: <CommentIcon />,
    },
  ];
  return (
    <div className="bg-pry-100 px-8 md:px-24 py-24 flex flex-col space-y-8 justify-center items-center w-full ">
      <HeadingThree title="Contact Us" color="gold" />
      <h4 className="font-body text-lg text-gold  text-justify tracking-widest">
        Do you want to make an enquiry? We will be delighted to hear it. Drop us
        a line below, we'd love to talk to you.
      </h4>
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

        <div className="flex flex-col space-y-12 w-full ">
          {feedbackInputs.map((input, index) => (
            <label
              className="relative text-gold focus-within:text-gold block"
              key={index}
            >
              <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                {input.icon}
              </span>

              <input
                type="text"
                className="py-3 px-4 w-full tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-gold text-gold placeholder:text-gold  appearance-none transition duration-300 focus:outline-none focus:border-gold focus:ring-gold focus:ring-1 "
                placeholder={input.name}
              />
            </label>
          ))}

          <button className=" flex justify-center w-full text-gold border border-gold font-body py-4 px-8  hover:bg-gold hover:text-pry-100 font-medium transition duration-300">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
