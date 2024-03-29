import React from "react";
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
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../api/apiCalls";
import { useSelector } from "react-redux";
import Loader from "../../components/Layouts/Loader";

const AddProduct = () => {
  const { isFetching } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.img[0]);

    const fileName = new Date().getTime() + data.img[0].name;
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
          const product = { ...data, img: downloadURL };
          addProduct(dispatch, product);
        });
      }
    );
  };

  const leftColumnInputs = [
    {
      name: "title",
      id: "title",
      placeholder: "Enter the name of the product",
      register: register,
      errors: errors,
    },
    {
      name: "desc",
      id: "desc",
      placeholder: "Enter a description for the product",
      register: register,
      errors: errors,
    },
    {
      name: "material",
      id: "material",
      placeholder: "Enter the material for the product",
      register: register,
      errors: errors,
    },
    {
      name: "category",
      id: "category",
      placeholder: "Enter the category(ies) of the product",
      register: register,
      errors: errors,
    },
    {
      name: "price",
      id: "price",
      placeholder: "0.00",
      type: "number",
      register: register,
      errors: errors,
    },
    {
      name: "color",
      id: "color",
      placeholder: "Enter the color of the product",
      register: register,
      errors: errors,
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
      errors: errors,
    },
    {
      name: "img",
      id: "img",
      type: "file",
      placeholder: "Select an image for the product",
      register: register,
      errors: errors,
    },
  ];

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full justify-between space-y-4 px-6 lg:px-0">
          <div className="flex justify-start whitespace-pre items-center ">
            <HeadingFour>Dashboard</HeadingFour>
            <span className="text-grey-500 font-normal "> / Add a Product</span>
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

export default AddProduct;
