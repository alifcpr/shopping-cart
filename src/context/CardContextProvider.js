import React, { useReducer, createContext } from "react";

const initialValue = {
  selectedItems: [],
  quantity: 0,
  itemsCoutner: 0,
  total: 0,
  checkout: false,
};

const sumItem = (item) => {
  const total = item.selectedItems.reduce((total , product) => total + product.price * product.quantity , 0);
  const itemsCounter = item.selectedItems.reduce((total , product) => total + product.quantity , 0);
  return {total : total , itemsCoutner : itemsCounter}
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      state.selectedItems.push({ ...action.payload, quantity: 1 });
      console.log("run")
      return { ...state, selectedItems: [...state.selectedItems] , ...sumItem(state) , checkout : false };

    case "REMOVE_ITEM":
      const newItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(newItem);
      return { ...state, selectedItems: [...newItem] , ...sumItem(state) };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return { ...state , ...sumItem(state) };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return { ...state , ...sumItem(state) };

    case "CLEAR":
      return {
        selectedItems: [],
        quantity: 0,
        itemsCoutner: 0,
        total: 0,
        checkout: false,
      };

    case "CHECK_OUT" : 
      return {
        selectedItems: [],
        quantity: 0,
        itemsCoutner: 0,
        total: 0,
        checkout: true,
      }

    default : 
      return state;
  }
  
};


export const cartContext = createContext();

const CardContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state)
  return (
    <>
      <cartContext.Provider value={{ state: state, dispatch: dispatch }}>
        {props.children}
      </cartContext.Provider>
    </>
  );
};

export default CardContextProvider;
