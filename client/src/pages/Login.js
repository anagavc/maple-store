import {
  HeadingTwo,
  ParagraphLarge,
} from "../components/UI/FontStyles/FontStyles";
import loginImg from "../images/login.svg";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../components/UI/Buttons/PrimaryButton";
import { login } from "../api/apiCalls";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FadeUpAnimation } from "../components/UI/Animations/Animations";
const Login = () => {
  let loading = true;
  let color = "#D2CAA2";

  const { error, isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(dispatch, navigate, { ...data });
  };
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-lg font-medium ">Login</p>
      {error && (
        <p className="text-pry-100 font-normal text-sm font-body">
          You have entered an invalid username or password
        </p>
      )}
      <FadeUpAnimation className="flex justify-between items-center h-full w-full border border-pry-100 bg-gold">
        <div className="md:flex-1 px-4 py-12 w-full md:p-12 space-y-6">
          <HeadingTwo
            title="Login information"
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
                placeholder="Enter a username"
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
              <p className="text-pry-100 font-normal text-sm font-body">
                {errors["username"] && errors["username"]?.message}
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
                placeholder="Enter your password"
                name="password"
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
              <p className="text-pry-100 font-normal text-sm font-body">
                {errors["password"] && errors["password"]?.message}
              </p>
            </div>

            <div>
              {isFetching ? (
                <button
                  type="disabled"
                  disabled={true}
                  className=" flex  justify-center items-center space-x-4  w-full  font-body py-3 px-8  bg-pry-100 text-gold font-medium transition duration-300"
                >
                  <ClipLoader color={color} loading={loading} size={25} />
                  <span className="animate-pulse">Signing in</span>
                </button>
              ) : (
                <SubmitButton title="Login" />
              )}
            </div>
            <div className="w-full flex  justify-center flex-row md:mx-auto">
              <p className="text-pry-100 font-body text-base">
                Don't have an account?
              </p>
              <NavLink
                className="text-pry-100 font-body ml-2 font-bold text-base hover:text-pry-50 transition duration-300"
                to="/register"
              >
                Register
              </NavLink>
            </div>
          </form>
        </div>

        <div className="bg-pry-100 flex-1 p-12 hidden md:flex flex-col h-full">
          <ParagraphLarge>
            At maple store, we are commited to ensure you have a blissful
            shopping experience.
          </ParagraphLarge>
          <img src={loginImg} alt="welcome" className="h-96" />
          <ParagraphLarge>
            We look forward to providing you a great &amp; funfilled shopping.
          </ParagraphLarge>
        </div>
      </FadeUpAnimation>
    </div>
  );
};

export default Login;
