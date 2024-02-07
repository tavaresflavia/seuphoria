import React from "react";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import axios from 'axios';
import Card from '../../components/Card/Card';
import { useAppSelector } from "../../store/store";



const ItemList = ({path}:{path:string;}) => {

    const items = useAppSelector((state) => (path === "/cart" ? state.cart.value: state.favorites.value));
    console.log("items",items)

  return <section>
    <ul>
    {/* {items.length && items.map((item)=>(<Item id={item}/>
))} */}
    
    </ul>
  </section>;
};

export default ItemList;
