import {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import { useAppSelector} from "../../store/store";

import ItemList from '../../components/ItemList/ItemList';


const Cart = () => {
    const [path, setPath] = useState("");

    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
      setPath(pathname);
    }, [pathname]);

    const cart = useAppSelector((state) => state.cart.value);
    console.log(cart)
    return (
        <main className="max-w-7xl m-auto">
            <h1 className=" border-y-4 border-gray-900  text-4xl  tracking-widest p-8">{path === "/cart" ?  "Your Cart": "Favorites"}</h1>
            <ItemList path={path}/>
        </main>
    );
};

export default Cart;