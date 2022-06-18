import { useEffect, useState } from "react";
import { publicRequest } from "../../api/requests";
import { Pagination } from "@mui/material";
import usePagination from "./Pagination";
import Loader from "./Loader";
import Notifications from "../UI/Notifications/Notifications";
import PrimaryButton, { BackButton } from "../UI/Buttons/PrimaryButton";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
const AllProducts = ({ filters, sort }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await publicRequest.get(
          path.includes("rings")
            ? `products?category=${path}`
            : path === "necklaces"
            ? "products?category=necklaces"
            : path.includes("rings") === false && path !== "allProducts"
            ? `products?category=${path}`
            : path === "allProducts"
            ? "products?allProducts"
            : "products/"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [path]);
  useEffect(() => {
    path &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, path, filters]);

  useEffect(() => {
    if (sort === "oldest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a._id.localeCompare(b._id))
      );
    } else if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b._id.localeCompare(a._id))
      );
    } else if (sort === "highest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "ascending") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (sort === "descending") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.title.localeCompare(a.title))
      );
    } else if (sort === "highest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "lowest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;
  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const items = usePagination(filteredProducts, PER_PAGE);
  const handleChange = (evebt, p) => {
    setPage(p);
    items.jump(p);
  };
  return (
    <div className="flex w-full mt-24 justify-between flex-col  ">
      <Notifications open={add} setOpen={setAdd} type="add" />

      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-between flex-wrap  w-full">
          {items.currentData().map((product) => {
            return (
              <div
                className="flex flex-col justify-between space-y-6 bg-pry-100 w-full md:w-96 mb-16  p-6"
                key={product._id}
              >
                <div className="bg-gold flex justify-center items-center">
                  <img src={product.img} className="W-52 h-52" alt="product" />
                </div>
                <div className="flex justify-between">
                  <p className="tracking-widest font-body  text-gold text-base capitalize">
                    {product.category}
                  </p>
                  <NavLink
                    to={`/product/${product._id}`}
                    className="text-gold hover:text-pry-50 transition duration-300"
                  >
                    <InfoIcon />
                  </NavLink>
                </div>

                <div className="flex justify-between">
                  <p className="font-heading  text-gold text-lg">
                    {product.title}
                  </p>
                  <p className="tracking-widest font-body  text-gold text-base font-bold">
                    ${product.price}
                  </p>
                </div>

                <PrimaryButton
                  title="Add to cart"
                  onClick={() => {
                    dispatch(addProduct({ ...product, quantity }));
                    setAdd(true);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="justify-self-end self-end">
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          color="primary"
          onChange={handleChange}
        />
      </div>

      <BackButton
        click={() => {
          navigate(-1);
        }}
        title="Back to home"
      />
    </div>
  );
};

export default AllProducts;
