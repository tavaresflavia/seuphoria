import React from "react";
import QuantityButton from "../QuantityButton/QuantityButton";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { removeFav } from "../../store/features/favorites";
import deleteIcon from "../../assets/icons/delete.png";
import { useAppSelector, useAppDispatch } from "../../store/store";
import axios from "axios";
import { Product } from "../../Interfaces";

const Item = ({ id, quantity }: { id: string; quantity: number; }) => {
  const SERVER_URI = process.env.REACT_APP_API_URL;

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | {}>({});
  const [path, setPath] = useState("");

  const location = useLocation();
  const { pathname } = location;

  const dispatch = useAppDispatch();
  console.log("itemprod", product);
  useEffect(() => {
    setPath(pathname);
    axios
      .get(`${SERVER_URI}/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error: string) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, [pathname, id]);

  function isProduct(value: any): value is Product {
    return (
      typeof value._id === "string" &&
      typeof value.name === "string" &&
      typeof value.price === "number"
    );
  }
  if(loading){
    return <p>Loading... </p>
  }

  if (!isProduct(product) || error) {
    return <p>{`Could not retrieve product ${id}. ${error}`} </p>;
  }

  const { imageUrl, name, price, _id } = product;

  return (
    <article className="border-b-2">
      <li className="flex justify-between text-sm  p-2 md:p-8">
        <div className="flex">
          <img
            className=" w-20 md:w-28"
            src={imageUrl}
            alt="Lippie Pencil"></img>
          <div className="px-2  md:px-8">
            <h2 className=" font-semibold text-base md:text-lg ">{name}</h2>
            <p> {`Item price: $${price}`}</p>
          </div>
        </div>
        {path === "/cart" && (
          <div className="flex flex-col justify-between items-center">
            <p className="px-2 md:px-8 font-semibold text-base md:text-lg ">
              {`$${price * quantity}`}
            </p>
            <QuantityButton id={_id} />
          </div>
        )}
        {path === "/favorites" && (
          <img
            className="w-4 h-4"
            onClick={() => {
              dispatch(removeFav(_id));
            }}
            src={deleteIcon}></img>
        )}
      </li>
    </article>
  );
};

export default Item;
