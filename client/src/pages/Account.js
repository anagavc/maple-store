import { MyLocation, Book, Settings } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
import userImg from "../images/reviewer1.png";
const Account = (props) => {
  return (
    <div className="w-full bg-pry-50 items-center justify-around flex h-full py-24">
      <div className="w-4/ lg:w-2/5 bg-pry-100 flex  flex-col  lg:space-x-4 p-4 lg:p-4 ">
        <div className="p-8 border-b border-b-gold space-y-8 flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-full  divide-x divide-gold">
            <h2 className=" text-gold  font-body text-xl text-center border-b-gold border-b w-full">
              Your information
            </h2>
          </div>
          <div className="flex justify-between px-8 w-4/5">
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-gold text-base font-body ">Name </p>
              <p className="text-gold text-base font-body ">Username</p>
              <p className="text-gold text-base font-body ">Email Address</p>
            </div>
            <div className="border-l border-l-gold justify-start"></div>
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-gold text-base font-body ">Name </p>
              <p className="text-gold text-base font-body ">Username</p>
              <p className="text-gold text-base font-body ">Email Address</p>
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <NavLink
              className="  text-gold py-2 px-12 font-body text-md border  hover:bg-gold hover:text-pry-100 transition duration-300"
              to={`update/:id`}
            >
              Edit Account
            </NavLink>
            <NavLink
              className="  text-gold py-2 px-12 font-body text-md border  hover:bg-gold hover:text-pry-100 transition duration-300"
              to="/orders"
            >
              Order History
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
