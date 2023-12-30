import React from "react";
import CardList from "../../components/CardList/CardList";
import { useAppSelector } from "../../store/store";

const Shop = () => {
  const cart = useAppSelector((state) => (state.cart.value));

  return (
    <section className="">
      <div className=" bg-black text-white text-4xl md:text-7xl text-center tracking-widest p-8">
        S<span className="font-semibold">EU</span>PHORIA
      </div>
      <CardList />
    </section>
  );
};

export default Shop;
