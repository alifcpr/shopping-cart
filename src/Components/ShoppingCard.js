import React, { useContext } from "react";
import { cartContext } from "../context/CardContextProvider";
import { shorte } from "../helpers/shorten";
import increase from "../asset/icon/increase.svg";
import decrease from "../asset/icon/negative.svg";
import trash from "../asset/icon/trash.svg";

const ShoppingCard = ({image , title , price , quantity , id}) => {
  const { dispatch } = useContext(cartContext);

  const cartData = {image , title , price , quantity , id};
  console.log("cartData" , cartData)

  return (
      <div className="border-2 bg-white hover:shadow-lg transition-all duration-500 [&:not(&:first-child)]:mt-4 rounded-lg flex items-center justify-around px-4 py-2">
        <img src={image} className="w-32 h-32" alt={title} />
        <div>
          <h3 className="text-2xl font-bold">{shorte(title)}</h3>
          <p className="text-lg">$ {price}</p>
        </div>
        <span className="text-xl bg-blue-100 w-8 h-8 text-center rounded-lg">{quantity}</span>

        <div className="flex gap-x-4">
          {quantity > 1 ? (
            <button onClick={() => dispatch({type : "DECREASE" , payload : cartData})} className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-2 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer">
            <img src={decrease} alt="increase-icon" className="w-6 h-6"/>
          </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: cartData })
              }
              className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-2 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer"
            >
              <img src={trash} alt="increase-icon" className="w-6 h-6" />
            </button>
          )}
          <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: cartData })
              }
              className="bg-blue-500 flex items-center justify-between gap-x-2 text-sm text-white px-2 py-2 font-semibold rounded-sm duration-300 hover:bg-blue-600 cursor-pointer"
            >
              <img src={increase} alt="increase-icon" className="w-6 h-6" />
            </button>
        </div>
      </div>
  );
};

export default ShoppingCard;
