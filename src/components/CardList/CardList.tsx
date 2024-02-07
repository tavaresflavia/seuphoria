import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import {Product} from "../../Interfaces";


const CardList = () => {
  const SERVER_URI = process.env.REACT_APP_API_URL
  const [products, setProducts] = useState<(Product)[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {

      const queryTags = tags?.map((tag)=> (`&tags=${tag}`))
      // .sort((a:Product,b:Product) => (b.rating-a.rating))
    axios
      .get(
        `${SERVER_URI}?${category ? "category="+category:""}${brand ? "brand="+brand:""}${String(...queryTags)}`
      )
      .then((res) => {
        console.log(res)
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error:string) => {
        console.log(error)
        setError(true);
        setLoading(false);
      });
  }, [ tags, category, brand]);

  if (loading === true){
    return (
      <p> Loading...</p>
    )
  }

  if (error === true){
    return (
      <p> error</p>
    )
  }


  return (
    <section className= " flex flex-wrap  justify-around m-2 md:m-4">
      {products.length > 0 ? (
        products.filter((product)=> product.price > 0).map((product) => {
          const {imageUrl,
            name,
            price,
            _id,
            brand,
            tags,
            colors,
            rating,
            description} = product
          return (
            <Card
              imageUrl={imageUrl}
              name={name}
              price={price}
              id={_id}
              key={_id}
              brand = {brand}
              tags = {tags}
              colors = {colors}
              rating = {rating}
              description= {description}

            />
          );
        })
      ) : (
        <div>products not found</div>
      )}
    </section>
  );
};

export default CardList;
