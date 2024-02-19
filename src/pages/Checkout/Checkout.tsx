import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <main>
      <h1 className=" bg-black text-white text-4xl md:text-7xl text-center tracking-widest p-8">
        THANK <span className="font-semibold">YOU</span>!
      </h1>

      <p className=" text-center my-8">
        Your order was completed successfully.
      </p>

      <div className="flex justify-center">
        <Link className=" bg-black p-2 text-white " to="/shop">
          ᐸ SHOP
        </Link>
      </div>
    </main>
  );
};

export default Checkout;
