import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
import registerImg from "../images/about.jpg";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../components/UI/Buttons/PrimaryButton";
import { updateUserInfo } from "../api/apiCalls";
import { useSelector } from "react-redux";
import Loader from "../components/Layouts/Loader";
import { useLocation, useNavigate } from "react-router-dom";
const UpdateAccount = () => {
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userID = location.pathname.split("/")[2];
  console.log(userID);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUserInfo(userID, { ...data }, dispatch, navigate);
  };
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
          <p className="text-pry-100  font-body text-lg font-medium ">
            Update your account information
          </p>
          {onSubmit && error === false ? (
            <p className="hidden"></p>
          ) : (
            <p className="text-red-100 font-normal text-sm font-body">
              You have entered an invalid username or password
            </p>
          )}
          <div className="flex justify-between items-center h-full w-full border border-pry-100 bg-gold">
            <div className="flex-1 p-12 space-y-6">
              <HeadingTwo
                title="Update your account information"
                color="text-pry-100"
                size="text-2xl text-center border-b border-pry-100"
              />
              <form
                className="flex w-full flex-col  justify-between space-y-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col w-full" key="name">
                  <label
                    htmlFor="name"
                    className="text-md text-pry-100 font-normal"
                  >
                    Username
                  </label>
                  <input
                    placeholder={currentUser.username}
                    name="username"
                    id="username"
                    type="text"
                    className="px-4  py-2  placeholder:text-pry-100 text-pry-100 bg-gold border border-pry-100 focus:outline-none focus:border-pry-100 focus:ring-pry-100 focus:ring-1 transition duration-300 w-full"
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 4,
                        message: "Username must be more than 4 characters",
                      },
                    })}
                  />
                  <p className="text-red-100 font-normal text-sm font-body">
                    {errors["username"] && errors["username"]?.message}
                  </p>
                </div>
                <div className="flex flex-col w-full" key="email">
                  <label
                    htmlFor="email"
                    className="text-md text-pry-100 font-normal"
                  >
                    Email address
                  </label>
                  <input
                    placeholder={currentUser.email}
                    name="email"
                    id="email"
                    type="text"
                    register={register}
                    className="px-4  py-2  placeholder:text-pry-100 text-pry-100 bg-gold border border-pry-100 focus:outline-none focus:border-pry-100 focus:ring-pry-100 focus:ring-1 transition duration-300 w-full"
                    {...register("email", {
                      required: "Email address is required",
                      minLength: {
                        value: 4,
                        message: "Email address must be more than 4 characters",
                      },
                    })}
                  />
                  <p className="text-red-100 font-normal text-sm font-body">
                    {errors["email"] && errors["email"]?.message}
                  </p>
                </div>
                <div className="flex flex-col w-full mb-6" key="password">
                  <label
                    htmlFor="password"
                    className="text-md text-pry-100 font-normal"
                  >
                    Password
                  </label>
                  <input
                    placeholder="•••••••••••"
                    id="password"
                    type="password"
                    register={register}
                    className="px-4  py-2  placeholder:text-pry-100 text-pry-100 bg-gold border border-pry-100 focus:outline-none focus:border-pry-100 focus:ring-pry-100 focus:ring-1 transition duration-300 w-full"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "password must be more than 4 characters",
                      },
                    })}
                  />
                  <p className="text-red-100 font-normal text-sm font-body">
                    {errors["password"] && errors["password"]?.message}
                  </p>
                </div>

                <div>
                  <SubmitButton title="UpdateAccount" />
                </div>
              </form>
            </div>

            <div className="bg-pry-100 flex-1 p-12 flex flex-col">
              <img src={registerImg} alt="welcome" />
              <HeadingTwo
                title="
               At maple store, we are commited to ensure you have a blissful
            shopping experience."
                color="text-gold"
                size="text-base text-center"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateAccount;
