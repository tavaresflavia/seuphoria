import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Filters } from "../../Interfaces";
import { starsArray } from "../../utils";
import fullStar from "../../assets/icons/full-star.png";
import halfStar from "../../assets/icons/star-half-empty.png";
import emptyStar from "../../assets/icons/empty-star.png";

const Filter = ({
  filters,
  handleFilterChange,
}: {
  filters: Filters;
  handleFilterChange: (value: string, key: keyof Filters) => void;
}) => {
  const SERVER_URI = process.env.REACT_APP_API_URL;
  const [search, setSearch] = useState("");

  const [uniqueValues, setUniqueValues] = useState({
    brands: [],
    categories: [],
    tags: [],
  });

  useEffect(() => {
    axios
      .get(`${SERVER_URI}/products/filters`)
      .then((res) => {
        console.log(res);
        setUniqueValues(res.data);
      })
      .catch((error: string) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex justify-center items-start gap-4 flex-wrap">
      <div>
        <input
          type="text"
          placeholder="Search for tags.."
          onChange={(e) => {
            setSearch(e.target.value);
          }}></input>
        <div>
          <div
            className={
              "border-2 border-zinc-700 " + (search === "" ? " hidden" : "")
            }>
            {uniqueValues.tags.map((tag: string) => {
              return tag.toLowerCase().includes(search.toLowerCase()) ? (
                <option
                className="cursor-pointer"
                  value={tag}
                  onClick={(e) => {
                    handleFilterChange(tag, "tags");
                  }}>
                  {tag.toLowerCase()}
                  {filters.tags.includes(tag) ? " ✓" :""}
                </option>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
      <select
        value={filters.brand}
        onChange={(e) => handleFilterChange(e.target.value, "brand")}>
        <option value="">Brands</option>
        {uniqueValues.brands.map((brand, index) =>
          brand ? (
            <option key={index} value={brand}>
              {brand}
            </option>
          ) : (
            ""
          )
        )}
      </select>

      <select
        value={filters.rating.toString()}
        onChange={(e) => handleFilterChange(e.target.value, "rating")}>
        <option value={0}> Rating </option>
        {[1, 2, 3, 4].map((rating) => {
          return (
            <option value={rating}>
              {starsArray(rating).map((type) => {
                return type === "full" ? "★" : "☆";
              })}
              <span> & Up</span>
            </option>
          );
        })}
      </select>

      <select
        value={filters.category}
        onChange={(e) => handleFilterChange(e.target.value, "category")}>
        <option value="">Category</option>
        {!!uniqueValues.categories.length &&
          uniqueValues.categories.map((category: string, index) =>
            category ? (
              <option key={index} value={category}>
                {category.replace("_", " ")}
              </option>
            ) : (
              ""
            )
          )}
      </select>
    </div>
  );
};

export default Filter;
