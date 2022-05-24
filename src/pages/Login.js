import Form from "../components/UI/Layouts/Form";
import { HeadingTwo } from "../components/UI/FontStyles/FontStyles";
const Login = () => {
  const loginDetails = [
    {
      name: "Email address",
      type: "email",
      id: "email",
    },
    {
      name: "Password",
      type: "password",
      id: "password",
    },
  ];
  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">Login</p>
      <HeadingTwo
        title="Login information"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <Form
        formTitle="Enter your account details"
        details={loginDetails}
        submitTitle="Login"
      />
    </div>
  );
};

export default Login;
