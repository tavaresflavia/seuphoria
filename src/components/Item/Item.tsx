import React from "react";
import QuantityButton from "../QuantityButton/QuantityButton";

const Item = () => {
  return (
    <article className="border-b-2">
      <li className="flex justify-between text-sm  p-2 md:p-8">
        <div className="flex">
          <img
            className=" w-20 md:w-28"
            src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614"
            alt="Lippie Pencil"></img>
          <div className="px-2  md:px-8">
            <h2 className=" font-semibold text-base md:text-lg ">
              name dhydydt hfghfgh
            </h2>
            <p> Item price: $12</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <p className="px-2 md:px-8 font-semibold text-base md:text-lg ">$12</p>
          <QuantityButton id={2} />
        </div>
      </li>
    </article>
  );
};

export default Item;
