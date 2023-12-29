import { useState } from "react";
import { addProduct, removeProduct } from "../../store/features/cart";
import { useAppDispatch } from "../../store/features/cart";
import { Product } from "../../Interfaces";
import fullStar from "../../assets/icons/full-star.png";
import halfStar from "../../assets/icons/star-half-empty.png";
import emptyStar from "../../assets/icons/empty-star.png";


const Card = ({
  imageUrl,
  name,
  price,
  id,
  brand,
  tags,
  colors,
  rating,
  description,
}: Product) => {

  const dispatch = useAppDispatch();

  //stars array to display rating
  const stars: string[] = Array(5);
  if (rating === null){
    stars.fill("empty", 0, 4);
    console.log("empty", stars)
  }
  stars.fill("full", 0, Math.floor(rating) - 1);
  console.log(rating, stars)

  if (Math.floor(rating) !== rating) {
    stars.push("half");
  }
  stars.fill("empty", Math.ceil(rating) - 1, 4);


  return (
    <article className="w-1/2 md:w-1/3 lg:w-1/5 p-2 md:p-8 ">
      {/* <img src={likeIcon} alt="like icon"></img> */}
      <div className="flex justify-center  h-40 md:h-60 w-full">
        <img
          className="max-h-40 md:max-h-60 max-w-60 "
          src={imageUrl}
          alt={name}></img>
      </div>
      <div className="mx-2  md:mx-4 -translate-y-10   opacity-0 hover:opacity-80">
        <p className="relative w-full  bg-gray-500 text-white  text-center cursor-pointer">
          Quick View
        </p>
     
      </div>
      <div className="flex justify-between ">
        <h3>{name}</h3>
        <p>{`$${price}`} </p>
      </div>

      <div> 
        {stars.map((type) => {
          return type === "full" ? (
            <img className="w-3.5 h-3.5 inline-block" src={fullStar} alt="full star"></img>
          ) : type === "half" ? (
            <img className="w-3.5 h-3.5 inline-block" src={halfStar} alt="half star"></img>
          ) : (
            <img className="w-3.5 h-3.5 inline-block" src={emptyStar} alt="empty star"></img>
          );
        })}
        </div>
      {/* <p>{description}</p> */}
      <button
        onClick={() => {
          dispatch(addProduct(id));
        }}>
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(removeProduct(id));
        }}>
        REMOVE
      </button>
    </article>
  );
};

export default Card;
