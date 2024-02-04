import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Item from "../Item/Item";

const ItemList = () => {
  const [path, setPath] = useState("");

  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  console.log(path);

  return <section>
    <ul><Item/>
    </ul>
  </section>;
};

export default ItemList;
