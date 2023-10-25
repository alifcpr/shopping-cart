import React , {useContext} from 'react';
import { productsData } from '../context/productsContextProvider';
import { useParams , Link } from "react-router-dom";

const ProductDetail = () => {

    const product = useContext(productsData);
    const productId = useParams().id - 1;
    const productInfo = product[productId] ;
    const {image , title , price , category , description}  = productInfo
    // console.log(`image : ${image} \n title : ${title} \n price : ${price} \n category : ${cctInfo;ategory} \n description : ${description}`)
    return (
        <div className="w-screen h-screen bg-slate-100 flex items-center justify-center">
            <div className="bg-white max-w-7xl p-6 border-2 gap-x-8 flex items-center justify-between shadow-lg">
                <div className="w-96 h-96 p-5 flex items-center">
                    <img className="object-center w-full h-full" src={image}/>
                </div>
                <div className="border-2 max-w-2xl p-4 rounded-lg">
                    <h1 className="font-bold text-2xl text-blue-500 ">{title}</h1>
                    <p className="my-4">{description}</p>
                    <h1 className=" text-yellow-500 font-bold text-lg">Category : <span className=" font-medium text-black">{category}</span></h1>
                <div className="flex item-center justify-between mt-4">
                    <h1 className="bg-green-500 px-6 py-2 rounded-lg text-white text-sm">${price}</h1>
                    <Link to="/products" className="bg-blue-500 px-6 py-2 rounded-lg text-white text-sm">Back To Shop</Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
