import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Account = (props) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="w-full bg-pry-50 items-center justify-center  flex h-full pt-32 pb-20 px-4 lg:px-0">
      <div className="w-full  lg:w-2/5 bg-pry-100 flex  flex-col justify-center items-center lg:space-x-4 p-4 lg:p-4 ">
        <div className="p-4 lg:p-8 border-b border-b-gold space-y-8 flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-full  divide-x divide-gold">
            <h2 className=" text-gold  font-body text-xl text-center border-b-gold border-b w-full">
              Your information
            </h2>
          </div>
          <div className="flex justify-between px-2 lg:px-8 w-full lg:w-4/5 space-x-4">
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-gold text-base font-body ">Username</p>
              <p className="text-gold text-base font-body ">Email </p>
            </div>
            <div className="border-l border-l-gold justify-start"></div>
            <div className="flex flex-col justify-between space-y-6">
              <p className="text-gold text-base font-body ">{user.username}</p>
              <p className="text-gold text-base font-body ">{user.email}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <NavLink
              className="  text-gold py-2 px-12 font-body text-md border  hover:bg-gold hover:text-pry-100 transition duration-300"
              to={`/account/${user._id}`}
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
