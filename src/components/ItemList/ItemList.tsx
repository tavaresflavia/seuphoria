import React from "react";
import Item from "../Item/Item";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { emptyCart } from "../../store/features/cart";
import { removeTotal } from "../../store/features/total";
import { Link } from "react-router-dom";

const ItemList = ({ path }: { path: string }) => {
  const favorites = useAppSelector((state) => state.favorites.value);
  const cart = useAppSelector((state) => state.cart.value);
  const total = useAppSelector((state) => state.total.value);

  const dispatch = useAppDispatch();

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
      {path === "/cart" && (
        <div className="p-4 md:p-8 flex items-end flex-col gap-4">
          <p className="font-semibold text-base md:text-lg">
            {!!total && `Total:  $${total}`}
          </p>

          <Link
            className=" bg-black p-2 text-white "
            onClick={() => {
              dispatch(emptyCart());
              dispatch(removeTotal(total));
            }}
            to="/checkout">
            CHECKOUT ᐳ
          </Link>
        </div>
      )}
    </section>
  );
};

export default ItemList;
