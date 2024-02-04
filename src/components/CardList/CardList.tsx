import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import {Product} from "../../Interfaces";


const CardList = () => {

  const [products, setProducts] = useState<(Product)[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState(0);
  const [maxi, setMaxi] = useState(999);
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=${maxi}&price_gretaer_than=${min}${
          type ? `&product_type=${type}` : ""
        }${category ? `&product_category=${category}` : ""}${
          brand ? `&brand=${brand}` : ""
        }${rating ? `&rating_greater_than=${rating}` : ""}`
      )
      .then((res) => {
        const data = res.data.map((product: Product) => {
          const {
            id,
            brand,
            name,
            price,
            description,
            category,
            type,
            tag_list: tags,
            api_featured_image: imageUrl,
            product_colors: colors,
            rating,
          } = product;
          return {
            id,
            brand,
            name,
            price,
            description,
            category,
            type,
            tags,
            imageUrl,
            colors,
            rating,
          };
          });

        if (tags.length > 0) {
          const filteredData = data.filter(
            (product: { tag_list: string[] }) => {
              return tags.every((tag) => product.tag_list.includes(tag));
            }
          );
          setProducts(filteredData);
        } else {
          setProducts(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [min, maxi, type, tags, rating]);

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
            id,
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
              id={id}
              key={id}
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
