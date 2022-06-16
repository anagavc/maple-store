import CircleLoader from "react-spinners/CircleLoader";
const Loader = ({ payment }) => {
  let loading = true;
  let color = "#2C3F6C";

  return (
    <div className="bg-pry-50 h-screen space-y-16  flex flex-col  items-center py-28">
      <CircleLoader color={color} loading={loading} size={60} />
      {payment && (
        <h2 className="text-center text-pry-100 font-bold text-xl mb-6 font-body">
          Your payment is being processed.Please be patient.
        </h2>
      )}
    </div>
  );
};

export default Loader;
