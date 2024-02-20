import { addFav, removeFav } from "../../store/features/favorites";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Product } from "../../Interfaces";
import fullStar from "../../assets/icons/full-star.png";
import halfStar from "../../assets/icons/star-half-empty.png";
import emptyStar from "../../assets/icons/empty-star.png";
import heartIcon from "../../assets/icons/heart.png";
import fullHeartIcon from "../../assets/icons/full-heart.png";
import QuantityButton from "../QuantityButton/QuantityButton";
import { starsArray } from "../../utils";

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

  const stars = starsArray(rating);

  //get the state values of the cart and favorites
  const favorites = useAppSelector((state) => state.favorites.value);

  return (
    <article className="w-1/2 md:w-1/3 lg:w-1/5 p-2 md:p-8 ">
      <div className="flex justify-center  h-40 md:h-60 w-full">
        <img
          className="max-h-40 md:max-h-60 max-w-60 "
          src={imageUrl}
          alt={name}></img>
      </div>

      <div className="flex justify-between my-2">
        <img
          className=" w-5 h-5 cursor-pointer"
          src={id && favorites.includes(id) ? fullHeartIcon : heartIcon}
          onClick={() => {
            id && favorites.includes(id)
              ? dispatch(removeFav(id))
              : dispatch(addFav(id));
          }}
          alt="like icon"></img>
        {id && <QuantityButton id={id} price={price} />}
      </div>
      <div className="flex justify-between ">
        <h3>{name}</h3>
        <p>{`$${price}`} </p>
      </div>
      <div>
        {stars.map((type, index) => {
          return  (
            <img
              key={index}
              className="w-3.5 h-3.5 inline-block"
              src={type === "full" ? fullStar : type === "half" ? halfStar : emptyStar }
              alt="full star"></img>
          )
        })}
      </div>
    </article>
  );
};

export default Card;
