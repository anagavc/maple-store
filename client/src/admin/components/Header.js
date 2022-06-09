import React from "react";
import { HeadingTwo } from "./FontStyles";

const Header = ({ setIsOpen }) => {
  return (
    <div className="flex justify-between w-full py-8 px-4 space-x-2 lg:px-12 mt-12">
      <div className="flex space-x-2 items-center text-pry-100">
        <button
          onClick={() => setIsOpen(true)}
          className="outline-none lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <HeadingTwo>Hi, Admin</HeadingTwo>
      </div>
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-pry-100">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            className="border border-grey-300 py-2 px-12 bg-pry-50  placeholder:text-grey-300  w-full shadow-sm focus:outline-none focus:border-pry-100 focus:ring-pry-100 focus:ring-1 transition duration-300 sm:text-sm"
            placeholder="Search"
          />
        </label>
      </div>
      <span className="text-pry-100">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9999 29.3334C17.4666 29.3334 18.6666 28.1334 18.6666 26.6667H13.3333C13.3333 28.1334 14.5199 29.3334 15.9999 29.3334ZM23.9999 21.3334V14.6667C23.9999 10.5734 21.8133 7.14671 17.9999 6.24004V5.33337C17.9999 4.22671 17.1066 3.33337 15.9999 3.33337C14.8933 3.33337 13.9999 4.22671 13.9999 5.33337V6.24004C10.1733 7.14671 7.99992 10.56 7.99992 14.6667V21.3334L5.33325 24V25.3334H26.6666V24L23.9999 21.3334Z"
            fill="#1E3330"
          />
        </svg>
      </span>
    </div>
  );
};

export default Header;
