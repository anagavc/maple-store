import React from "react";

const Input = ({
  name,
  type,
  id,
  placeholder,
  width,
  register,
  errors,
  options,
}) => {
  return (
    <div className="flex flex-col w-full" key={name}>
      <label
        className="text-grey-600 text-base font-normal font-body"
        htmlFor={id}
        key={id + "label"}
      >
        {id}
      </label>
      {type === "select" ? (
        <select
          {...register(id, {
            required: `${id} is required`,
            minLength: {
              value: 4,
              message: `${id} must be more than 4 characters`,
            },
          })}
          className={`py-2 px-4 border border-pry-100 font-body bg-pry-50 text-sm focus:outline-none focus:border-pry-100 focus:ring-pry-100 focus:ring-1 transition duration-300 w-full
   `}
          name={name}
        >
          {options?.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          key={name}
          className={`py-2 px-4 border border-pry-100 font-body bg-pry-50  text-sm focus:outline-none focus:border-pry-100 focus:ring-pry-100 focus:ring-1 transition duration-300 w-full
   `}
          type={type}
          id={id}
          {...register(id, {
            required: `${id} is required`,
            minLength: {
              value: 4,
              message: `${id} must be more than 4 characters`,
            },
          })}
          placeholder={placeholder}
        />
      )}

      <p className="text-red-100 font-normal text-sm font-body">
        {errors[id] && errors[id]?.message}
      </p>
    </div>
  );
};

export default Input;
