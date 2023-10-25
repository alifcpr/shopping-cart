import React, { useState } from "react";
import ProductsContextProvider from "./context/productsContextProvider";
import Store from "./Components/Store";
import ProductDetail from "./Components/ProductDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import CardContextProvider from "./context/CardContextProvider";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <CardContextProvider>
        <ProductsContextProvider>
          <Navbar/>
          <Switch>
            <Route path="/products/:id" component={ProductDetail} />
            <Route path="/products" component={Store} />
            <Route path="/cards" component = {Cards}/>
            <Redirect to="/products" />
          </Switch>
        </ProductsContextProvider>
      </CardContextProvider>
    </>
  );
}

export default App;
