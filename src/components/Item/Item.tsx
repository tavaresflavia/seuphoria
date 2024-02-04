import React from "react";

const Item = () => {
  return (
    <article>
      <li className="flex justify-between  p-2 md:p-8">
        <img className = " w-20 md:w-28" src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614" alt="Lippie Pencil"></img>
        <h2 className="px-2 md:px-8">name</h2>
        <div>
        <p>$12</p>
        <p>8</p>
        </div>
 
      </li>
    </article>
  );
};

export default Item;
