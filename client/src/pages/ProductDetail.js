import { useState, useEffect } from "react";
import PrimaryButton, {
  BackButton,
} from "../components/UI/Buttons/PrimaryButton";
import { HeadingTwo, Paragraph } from "../components/UI/FontStyles/FontStyles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../api/requests";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className="bg-pry-50 px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4">
      <p className="text-pry-100  font-body text-base font-medium ">
        Home &gt; Products &gt; {product.title}
      </p>
      <HeadingTwo
        title="Product Details"
        color="text-pry-100"
        size="text-3xl tracking-loose"
      />
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-12">
        <div className="flex flex-col justify-between flex-1 h-4/5">
          <div className="w-full h-full bg-pry-100 flex justify-center items-center">
            <img
              src={product.img}
              alt={product.title}
              className="h-96 w-auto"
            />
          </div>
          <BackButton
            click={() => {
              navigate(-1);
            }}
            title="Back to products"
          />
        </div>
        <div className="flex flex-col justify-between flex-1  h-4/5 space-y-7 ">
          <p className="tracking-widest font-body uppercase text-pry-100 text-md">
            {product.category}
          </p>
          <p className="font-heading  text-pry-100 text-2xl">{product.title}</p>
          <p className="font-body text-pry-100 text-base text-justify tracking-wide">
            {product.desc}
          </p>
          <div className="flex flex-col">
            <Paragraph>Material: {product.material}</Paragraph>
            <Paragraph>Price: ${product.price}</Paragraph>
            <Paragraph>Color:{product.color}</Paragraph>
          </div>
          <PrimaryButton
            title="Add to cart"
            onClick={() => {
              dispatch(addProduct({ ...product, quantity }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
