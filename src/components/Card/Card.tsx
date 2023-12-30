import {
  addProduct,
  removeProduct,
  useAppDispatch,
} from "../../store/features/cart";
import { useAppSelector } from "../../store/store";
import { Product } from "../../Interfaces";
import fullStar from "../../assets/icons/full-star.png";
import halfStar from "../../assets/icons/star-half-empty.png";
import emptyStar from "../../assets/icons/empty-star.png";
import addIcon from "../../assets/icons/add.png";
import minusIcon from "../../assets/icons/minus.png";
import firstAddIcon from "../../assets/icons/add-black.png";
import heartIcon from "../../assets/icons/heart.png";
import fullHeartIcon from '../../assets/icons/full-heart.png'
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
  stars.fill("empty", 0, 5);
  if (rating) {
    stars.fill("full", 0, Math.floor(rating));
    if (Math.floor(rating) !== rating) {
      stars[Math.floor(rating)] = "half";
    }
  }

  //check if there the product is the cart and get quantity
  const cart = useAppSelector((state) => state.cart.value);

  return (
    <article className="w-1/2 md:w-1/3 lg:w-1/5 p-2 md:p-8 ">
      {/* <div className="-translate-y-5 md:-translate-y-7  flex justify-end">
 
      </div> */}

      <div className="flex justify-center  h-40 md:h-60 w-full">
        <img
          className="max-h-40 md:max-h-60 max-w-60 "
          src={imageUrl}
          alt={name}></img>
      </div>

      <div className="flex justify-between my-2">
        <img
          className=" w-5 h-5 cursor-pointer"
          src={heartIcon}
          alt="like icon"></img>
        {cart[id] ? (
          <div className="opacity-90 relative bg-black text-white semibold w-30 cursor-pointer flex justify-center items-end rounded-full">
            <img
              className="w-5 h-5 cursor-pointer"
              src={addIcon}
              alt="add icon"
              onClick={() => {
                dispatch(addProduct(id));
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
      </div>
      <div className="flex justify-between ">
        <h3>{name}</h3>
        <p>{`$${price}`} </p>
      </div>

      <div>
        {stars.map((type) => {
          return type === "full" ? (
            <img
              className="w-3.5 h-3.5 inline-block"
              src={fullStar}
              alt="full star"></img>
          ) : type === "half" ? (
            <img
              className="w-3.5 h-3.5 inline-block"
              src={halfStar}
              alt="half star"></img>
          ) : (
            <img
              className="w-3.5 h-3.5 inline-block"
              src={emptyStar}
              alt="empty star"></img>
          );
        })}
      </div>
    </article>
  );
};

export default Card;
