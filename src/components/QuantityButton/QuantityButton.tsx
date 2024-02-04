import React from "react";
import addIcon from "../../assets/icons/add.png";
import minusIcon from "../../assets/icons/minus.png";
import { addProduct, removeProduct } from "../../store/features/cart";
import { useAppSelector, useAppDispatch } from "../../store/store";
import firstAddIcon from "../../assets/icons/add-black.png";

const QuantityButton = ({ id}: {id:number;}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.value);
  console.log(cart);

  return (
    <>
      {cart[id] ? (
        <div className="opacity-90 relative bg-black text-white semibold w-30 cursor-pointer flex justify-center items-end rounded-full border-2 border-black">
          <img
            className="w-5 h-5 cursor-pointer"
            src={addIcon}
            alt="add icon"
            onClick={() => {
              dispatch(addProduct(id ));
            }}
          />
          <p className="mx-2 text-sm "> {cart[id]} </p>
          <img
            className="w-5 h-5 cursor-pointer"
            src={minusIcon}
            alt="minus icon"
            onClick={() => {
              dispatch(removeProduct(id));
            }}
          />
        </div>
      ) : (
        <img
          className=" w-5 h-5 cursor-pointer"
          src={firstAddIcon}
          alt="add button"
          onClick={() => {
            dispatch(addProduct(id));
          }}
        />
      )}
    </>
  );
};

export default QuantityButton;
