import React, { useContext } from "react";
import { isInCart, shorte } from "../helpers/shorten";
import { Link } from "react-router-dom";
import shopping from "../asset/icon/shopping.svg";
import { cartContext } from "../context/CardContextProvider";
import { qunatityCount } from "../helpers/shorten";
import increase from "../asset/icon/increase.svg";
import decrease from "../asset/icon/negative.svg";
import trash from "../asset/icon/trash.svg";

const Product = ({ id, title, price, image, description }) => {
  const { state, dispatch } = useContext(cartContext);
  const productInfo = { id, title, price, image, description };

  return (
    <>
      <div className="border-2 rounded-lg p-3 w-72 bg-white transition-all duration-300 hover:shadow-lg">
        <img className=" w-64 h-64" src={image} />
        <h1 title={title} className="mt-4 text-xl font-bold">
          {shorte(title)}
        </h1>
        <h1 className="mt-2">${price}</h1>
        <div className="flex justify-around items-center mt-4">
          <Link
            to={`/products/${id}`}
            className="text-blue-500 text-sm px-4 py-2 font-semibold cursor-pointer duration-300 hover:bg-slate-100"
          >
            Details
          </Link>
          {isInCart(state, id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productInfo })
              }
              className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-2 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer"
            >
              <img src={increase} alt="increase-icon" className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productInfo })
              }
              className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-6 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer"
            >
              <span>Add To Cart</span>
              <img src={shopping} alt="shopping-icon" className="w-6 h-6" />
            </button>
          )}

          {qunatityCount(state, id) === 1 && (
            <>
            <h1 className="text-xl text-blue-500 font-bold">{qunatityCount(state , id)}</h1>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productInfo })
              }
              className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-2 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer"
            >
              <img src={trash} alt="increase-icon" className="w-6 h-6" />
            </button>
            </>
          )}

          {qunatityCount(state, id) > 1 && (
            <>
            <h1 className="text-xl text-blue-500 font-bold">{qunatityCount(state , id)}</h1>
            <button onClick={() => dispatch({type : "DECREASE" , payload : productInfo})} className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-2 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer">
              <img src={decrease} alt="increase-icon" className="w-6 h-6"/>
            </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
