import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

import { HeadingFour } from "../components/FontStyles";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../../api/apiCalls";
import { useSelector } from "react-redux";
import Loader from "../../components/Layouts/Loader";

const UpdateProduct = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[3];
  const [loading, setLoading] = useState(false);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productID)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const fileName = new Date().getTime() + data.img[0]?.name;
    if (data.img[0]) {
      console.log(product.img);

      setLoading(true);
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, data.img[0]);
      uploadTask.on(
        "state_changed",
        (progress) => {
          console.group(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File is availabe for download at", downloadURL);
            const updatedProduct = { ...data, img: downloadURL };
            updateProduct(productID, updatedProduct, dispatch);
          });
        }
      );
      setLoading(false);
    } else if (!data.img[0]) {
      setLoading(true);
      console.log(product.img);
      const updatedProduct = { ...data, img: product.img };
      updateProduct(productID, updatedProduct, dispatch, navigate);
      setLoading(false);
    }
  };

  const leftColumnInputs = [
    {
      name: "title",
      id: "title",
      placeholder: product.title,
      register: register,
    },
    {
      name: "desc",
      id: "desc",
      placeholder: product.desc,
      register: register,
    },
    {
      name: "material",
      id: "material",
      placeholder: product.material,
      register: register,
    },
    {
      name: "category",
      id: "category",
      placeholder: product.category,
      register: register,
    },
    {
      name: "price",
      id: "price",
      placeholder: product.price,
      type: "number",
      register: register,
    },
    {
      name: "color",
      id: "color",
      placeholder: product.color,
      register: register,
    },
    {
      name: "inStock",
      id: "inStock",
      type: "select",
      placeholder: "Select whether the product is in stock or not",
      options: [
        { value: true, name: "Yes" },
        { value: false, name: "No" },
      ],
      register: register,
    },
    {
      name: "img",
      id: "img",
      type: "file",
      placeholder: product.img,
      register: register,
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full justify-between space-y-4 px-6 lg:px-0">
          <div className="flex justify-start whitespace-pre items-center ">
            <HeadingFour>Dashboard</HeadingFour>
            <span className="text-grey-500 font-normal ">
              {" "}
              / Update {product.title}
            </span>
          </div>

          <form
            className="flex flex-col space-y-2 justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {leftColumnInputs.map((input, index) => (
              <Input
                name={input.name}
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                options={input.options}
                register={input.register}
                errors={input.errors}
              />
            ))}

            <div className="flex justify-between space-x-8  w-full">
              <PrimaryButton>Submit entry</PrimaryButton>
              <SecondaryButton
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </SecondaryButton>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
