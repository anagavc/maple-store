import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

import { HeadingFour, Paragraph } from "../components/FontStyles";
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
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'

    const uploadTask = uploadBytesResumable(storageRef, data.img[0], metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
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
              <SecondaryButton path="/dashboard">Cancel</SecondaryButton>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddProduct;
