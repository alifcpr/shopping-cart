import React, { useContext } from "react";
import { cartContext } from "../context/CardContextProvider";
import { Link } from "react-router-dom";
import shoppingcart from "../asset/icon/shoppingcart.svg";

const Navbar = () => {
  const { state } = useContext(cartContext);

  const show = () => {
    console.log(state);
  };

  return (
    <div className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4">
        <Link className="text-2xl font-bold text-blue-500" to="/products">
          Product
        </Link>
        <Link to="/cards" className="relative">
          <img src={shoppingcart} className = "w-10 h-10" />
          <span className="bg-blue-500 w-6 text-center h-6 rounded-full absolute font-bold text-white -top-2 -right-2">{state.itemsCoutner}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
