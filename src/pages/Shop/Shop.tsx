import React from 'react';
import CardList from '../../components/CardList/CardList';
import { useAppSelector } from "../../store/store";

const Shop = () => {


    const cart = useAppSelector((state) => {
        console.log(state);
        return state.cart.value});
        console.log(cart)
    return (
        <section className="">
                <div className=" bg-black text-white text-7xl text-center tracking-widest p-8"> S<span className="font-semibold">EU</span>PHORIA </div>
                <p>{Object.keys(cart).length}</p>
                <CardList/>
            
            
        </section>
    );
};

export default Shop;