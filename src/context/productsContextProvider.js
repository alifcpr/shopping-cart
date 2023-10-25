import React, { useState , createContext , useEffect } from 'react';
import { getProducts } from '../services/api';


export const productsData = createContext();
export const loadingState = createContext();

const ProductsContextProvider = ({children}) => {

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true)

    console.log(loading)

    useEffect(() => {
        const feachAPI = async () => {
            const products = await getProducts();
            setData(products);
            setLoading(false)
        }
        feachAPI();
    } , [])
    
    return (
        <>
            <productsData.Provider value={data}>
                <loadingState.Provider value={loading}>
                    {children}
                </loadingState.Provider>
            </productsData.Provider>
        </>
    );
}

export default ProductsContextProvider;
