import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Filters } from "../../Interfaces";
import Select from "../Select/Select";
import arrow from "../../assets/icons/arrow-down.png"

const Filter = ({
  filters,
  handleFilterChange,
}: {
  filters: Filters;
  handleFilterChange: (value: string, key: keyof Filters) => void;
}) => {
  const SERVER_URI = process.env.REACT_APP_API_URL;
  const [showTags, setShowTags] = useState(false);

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
  }, [SERVER_URI]);
  return (
    <section>
      <div className="flex justify-center items-start gap-4 flex-wrap">
        <div>
        <p className="w-48 bg-transparent border border-gray-300 rounded-md py-2 mt-2 pl-3 pr-1 focus:border-gray-500 focus:outline-none flex justify-between items-center" onClick={()=>{setShowTags(!showTags)}}>Tags <img className="w-2.5" src={arrow} alt="arrow down"></img></p>
        <ul className={` w-48 border-2  rounded border-zinc-400 bg-white absolute p-2 ${showTags?"":"hidden"}`}>
          {uniqueValues.tags.map((tag: string) => {
            return  (
              <li
                className="cursor-pointer"
                onClick={() => {
                  handleFilterChange(tag, "tags");
                  console.log(tag, "here");
                }}>
                {tag.toLowerCase()}
                {filters.tags.includes(tag) ? " ✓" : ""}
              </li>
            )
            ;
          })}
        </ul>
        </div>

        {/* <div className="w-48">
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
          </ul> */}

        {/* </div> */}
        {/* </div> */}
        <Select
          type="brand"
          value={filters.brand}
          uniqueValues={uniqueValues.brands}
          handleFilterChange={handleFilterChange}
        />
        <Select
          type="rating"
          value={filters.rating}
          uniqueValues={[1, 2, 3, 4]}
          handleFilterChange={handleFilterChange}
        />
        <Select
          type="category"
          value={filters.category}
          uniqueValues={uniqueValues.categories}
          handleFilterChange={handleFilterChange}
        />
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
