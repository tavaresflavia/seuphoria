import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Product } from "../../Interfaces";
import { Filters } from "../../Interfaces";
import Filter from "../Filter/Filter";

const CardList:React.FC = () => {
  const SERVER_URI = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    brand: "",
    tags: [],
    rating: 0,
    category: "",
  });
  const getQueryTags = (tags:string[])=>{
    let queryTags = ""
    tags.forEach((tag)=>{
      queryTags += `&tags=${tag}`
    })
    return queryTags
  }

  useEffect(() => {
    const { brand, tags, rating, category } = filters;
    const queryTags = getQueryTags(tags);
    axios
      .get(
        `${SERVER_URI}/products?${category ? "category=" + category : ""}${
          brand ? "&brand=" + brand : ""
        }${rating > 0 ? "&rating=" + rating : ""}${queryTags}`
      )
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error: {message: string}) => {
        console.log(error)
        setError(error.message);
        setLoading(false);
      });
  }, [filters,SERVER_URI]);
  
  const handleFilterChange = (
    value: string,
    key: keyof Filters
  ) => {
    if (key === "tags") {
        const newTags = filters.tags.includes(value) ? filters.tags.filter(tag => tag !== value):[...filters.tags, value]

      setFilters({
        ...filters,
        tags: newTags,
      });
    } else {
      setFilters({
        ...filters,
        [key]: value,
      });
    }
  };

  if (loading === true) {
    return <p> Loading...</p>;
  }

  if (error) {
    return <p className="text-center my-8 text-red-800 font-bold "> {`${error}. Try again later.`}</p>;
  }

  return (
    <>
      <Filter filters={filters} handleFilterChange={handleFilterChange} />
      <div className=" flex flex-wrap  justify-around m-2 md:m-4">
        {products.length > 0 ? (
          products
            .filter((product) => product.price > 0)
            .map((product) => {
              const {
                imageUrl,
                name,
                price,
                _id,
                brand,
                tags,
                colors,
                rating,
                description,
              } = product;
              return (
                <Card
                  imageUrl={imageUrl}
                  name={name}
                  price={price}
                  id={_id}
                  key={_id}
                  brand={brand}
                  tags={tags}
                  colors={colors}
                  rating={rating}
                  description={description}
                />
              );
            })
        ) : (
          <div>products not found</div>
        )}
      </div>
    </>
  );
};

export default CardList;
