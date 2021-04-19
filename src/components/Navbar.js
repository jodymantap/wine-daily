import React, { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  let [nav, setNav] = useState(false);
  const { cartTotal } = useSelector((state) => state.wineCart);

  return (
    <div>
      <nav className="bg-red-900 shadow-md lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-between mx-5 items-center">
          <div className="my-5 flex">
            <h1 className=" text-yellow-500 text-3xl font-bold">WineDaily</h1>
          </div>
          <div className="my-6 flex">
            {nav ? (
              <button
                onClick={() => setNav(!nav)}
                className="focus:outline-none text-yellow-500 block lg:hidden"
              >
                <svg
                  className="h-8 w-8 rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setNav(!nav)}
                className="focus:outline-none text-yellow-500 block lg:hidden"
              >
                <svg
                  className="h-8 w-8 rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className={`lg:flex mx-5 items-center ${nav ? "flex" : "hidden"}`}>
          <div className="mr-5 lg:flex hidden text-yellow-500">
            <svg
              className="cursor-pointer text-yellow-500 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <h1
              className={`text-yellow-500 border border-yellow-500  text-xs bg-red-900 rounded-full py-1 font-bold text-center mx-auto w-6 h-6 ${
                cartTotal === 0 ? "hidden" : "block"
              }`}
            >
              {cartTotal}
            </h1>
          </div>
          <div className="mb-5 lg:mb-0 text-yellow-500 font-medium lg:text-lg subpixel-antialiased">
            <a
              href="https://www.linkedin.com/in/jodypratama"
              target="_blank"
              className="hover:bg-yellow-500 rounded-lg p-2 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
