import React from "react";
import { Filters } from "../../Interfaces";
import { starsArray } from "../../utils";


const Select = ({
  type,
  value,
  uniqueValues,
  handleFilterChange,
}: {
  type: keyof Filters;
  value: string | number;
  uniqueValues: (string | number)[];
  handleFilterChange: (value: string, key: keyof Filters) => void;
}) => {

  const ratingOption=(rating:number)=> {
    let option = ""
    starsArray(rating).forEach((type) => {
      option.concat( "full" ? "★" : "☆");
    })
    return option
  }
 
  return (
    <select
      className={` w-48 bg-transparent border border-gray-300 rounded-md py-2 my-2 px-3 focus:border-gray-500 focus:outline-none`}
      value={value}
      onChange={(e) => handleFilterChange(e.target.value, type)}>
      <option value="">{type.charAt(0).toUpperCase() + type.slice(1)} </option>
      {uniqueValues.map(
        (el) =>
          el && (
            <option key={el} value={el}>
              {typeof el === "number" ? (
               ratingOption(el)
              ) : (
                el.replace("_", " ")
              )}
            </option>

          )
      )}
    </select>
  );
};

export default Select;
