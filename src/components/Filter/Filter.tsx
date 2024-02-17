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
    <section>
    <div className="flex justify-center items-start gap-4 flex-wrap">
      <div className="w-48">
        <input
          className=" focus:border-transparent focus:outline-none"
          type="text"
          placeholder="Search for tags.."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}></input>

        <span
          className="font-medium text-zinc-700"
          onClick={() => {
            setSearch("");
          }}>
          x
        </span>
        <div>
          <ul
            className={
              "border-2 rounded border-zinc-400 bg-white absolute p-2" +
              (search === "" ? " hidden" : "")
            }>
            {uniqueValues.tags.map((tag: string) => {
              return tag.toLowerCase().includes(search.toLowerCase()) ? (
                <li
                  className="cursor-pointer"
                  onClick={(e) => {
                    handleFilterChange(tag, "tags");
                  }}>
                  {tag.toLowerCase()}
                  {filters.tags.includes(tag) ? " ✓" : ""}
                </li>
              ) : (
                ""
              );
            })}
          </ul>
         
        </div>
      </div>
      <select
        className="w-48"
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
        className="w-48"
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
        className="w-48"
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

      <div className="flex justify-center text-sm">
            {filters.tags.map((tag) => (
              <p
                className="border-2 rounded border-zinc-400 inline p-1 m-1 flex gap-1"
                onClick={(e) => {
                  handleFilterChange(tag, "tags");
                }}>
                {tag} <span className="font-bold text-zinc-700">x</span>
              </p>
            ))}
          </div>

    </section>
  );
};

export default Filter;
