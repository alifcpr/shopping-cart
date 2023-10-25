import React, { useContext } from "react";
import { cartContext } from "../context/CardContextProvider";
import ShoppingCard from "./ShoppingCard";
import {Link} from "react-router-dom";
const Cards = () => {
  const { state , dispatch } = useContext(cartContext);
  return (
    <div className="grid py-4 bg-slate-100 grid-cols-12 mt-20 gap-x-8 relative max-w-7xl mx-auto">
      <div className="col-span-8">
        {state.selectedItems.map((item) => (
          <ShoppingCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </div>
      <div className="relative col-span-4">
        <div className="sticky top-20 p-4 right-0 bg-white border-2 rounded-lg">
          
          {
          !state.checkout && state.selectedItems.length === 0 && (
            <div className="flex flex-col items-center gap-y-6 justify-center">
              <h1 className="font-semibold text-xl text-blue-600">
                AnyThing !
              </h1>
              <Link to="/products" className="px-4 py-2 bg-red-400 rounded-lg">Back To Shop</Link>
            </div>
          )
          }

          {state.selectedItems.length > 0 && (
            <div>
              <h1 className="font-semibold text-xl text-blue-600">
                ItemsCounter :{" "}
                <span className="text-black">{state.itemsCoutner}</span>
              </h1>
              <h1 className="font-semibold text-xl text-blue-600">
                Total : $ <span className="text-black">{state.total}</span>
              </h1>
              <div className="flex items-center justify-between mt-5">
                <button onClick={() => dispatch({type : "CLEAR"})} className="px-4 py-2 text-green-500 hover:bg-slate-100 rounded-md">
                  Clear
                </button>
                <button onClick={() => dispatch({type : "CHECK_OUT"})} className="px-4 py-2 bg-blue-500 rounded-md text-white">
                  Checkout
                </button>
              </div>
            </div>
          )}

          {state.checkout && (
            <h1 className="font-semibold text-green-400">Wow Nice</h1>
          )}

        </div>
      </div>
    </div>
  );
};

export default Cards;
