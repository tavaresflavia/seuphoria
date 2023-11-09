import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from '../Card/Card';

const CardList = () => {
  const [products, setProducts] = useState<({} | void)[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState(0);
  const [maxi, setMaxi] = useState(9999);
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);

  interface Product {
    brand: string;
    name: string;
    price: number;
    description: string;
    category: string;
    type: string;
    tag_list?: string[];
    tags?: string[];
    api_feature_image?: string;
    imageUrl?: string;
    product_colors?: [];
    colors?: [];
    rating: number;
  }

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
            brand,
            name,
            price,
            description,
            category,
            type,
            tag_list: tags,
            api_feature_image: imageUrl,
            product_colors: colors,
            rating,
          } = product;
          return {
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
        console.log(data);
        if (tags.length > 0) {
          const filteredData = data.filter(
            (product: { tag_list: string[] }) => {
              return tags.every((tag) => product.tag_list.includes(tag));
            }
          );
          console.log(filteredData);
          setProducts(filteredData);
        } else {
          console.log(data);
          setProducts(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [min, maxi, type, tags, rating]);

  return (
    <div>{/* <Card imageUrl={"abc"} name={"abc"} quantity={"abc"}  /> */}</div>
  );
};

export default CardList;
