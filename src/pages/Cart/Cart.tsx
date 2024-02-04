import {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import { useAppSelector} from "../../store/store";
import axios from 'axios';
import Card from '../../components/Card/Card';
import ItemList from '../../components/ItemList/ItemList';


const Cart = () => {
    const [products, setProducts] = useState([]) ;

    // useEffect(()=>{
    //     const async data = () =>{ 
    //         const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json")
    //         return response.data

    // },[products])
    const cart = useAppSelector((state) => state.cart.value);
    console.log(cart)
    return (
        <main className="max-w-7xl m-auto">
            <h1 className=" border-y-4 border-gray-900  text-4xl  tracking-widest p-8">Your Cart</h1>
            <ItemList/>
        </main>
    );
};

export default Cart;