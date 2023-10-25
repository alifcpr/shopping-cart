import React, { useContext } from "react";
import { productsData } from "../context/productsContextProvider";
import Product from "./Product";
import { loadingState } from "../context/productsContextProvider";
import Loading from "./Loading";

const Store = () => {
  const loading = useContext(loadingState);
  const productss = useContext(productsData);
  return (
    <>
      <div className="mt-28">
        <div className=" max-w-7xl gap-10 m-auto flex justify-between flex-wrap items-center">
          {loading ? (
            <Loading />
          ) : (
            productss.map((item) => (
              <Product
                key={item.id}
                title={item.title}
                image={item.image}
                id={item.id}
                price={item.price}
                category={item.category}
                description={item.description}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Store;
