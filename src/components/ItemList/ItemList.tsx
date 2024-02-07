import React from "react";
import Item from "../Item/Item";
import { useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";

const ItemList = ({ path }: { path: string }) => {
  const favorites = useAppSelector((state) => state.favorites.value);

  const cart = useAppSelector((state) => state.cart.value);

  return (
    <section>
      <div className="my-4 md:mt-8 px-2 md:px-8">
        <Link className=" bg-black mx-auto p-2 text-white " to="/shop">
          ᐸ SHOP
        </Link>
        </div>
      <ul>
        {Object.keys(cart).length && path === "/cart"
          ? Object.keys(cart).map((id) => (
              <Item key={id} id={id} quantity={cart[id]} />
            ))
          : ""}
        {path === "/favorites" && favorites.length
          ? favorites.map((id: string) => (
              <Item key={id} id={id} quantity={0} />
            ))
          : ""}
      </ul>
      <Link to="/checkout"></Link>
    </section>
  );
};

export default ItemList;
