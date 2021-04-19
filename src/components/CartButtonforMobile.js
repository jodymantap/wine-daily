import React from "react";
import { useSelector } from "react-redux";

function CartButtonforMobile() {
  const { cartTotal } = useSelector((state) => state.wineCart);

  return (
    <div className="p-2 bg-red-900 text-yellow-500 rounded-full fixed right-8 bottom-8 z-10 shadow-lg">
      <svg
        className="cursor-pointer text-yellow-500 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
      <h1
        className={`fixed bottom-9 border border-yellow-500 text-yellow-500 text-xs bg-red-900 rounded-full py-1 font-bold text-center mx-auto w-6 h-6 ${
          cartTotal === 0 ? "hidden" : "block"
        }`}
      >
        {cartTotal}
      </h1>
    </div>
  );
}

export default CartButtonforMobile;
