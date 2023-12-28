import { addProduct, removeProduct } from "../../store/features/cart";
import { useAppDispatch } from "../../store/features/cart";
import { Product } from "../../Interfaces";

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
  return (
    <article>
      {/* <img src={likeIcon} alt="like icon"></img> */}
      <div>
        <img src={imageUrl} alt={name}></img>
        <p>Quick View</p>
      </div>
      <h3>{name}</h3>
      <p>{price} </p>
      <p>{description}</p>
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
