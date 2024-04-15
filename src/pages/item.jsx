import React, { useState, useEffect } from "react";
import FoodCards from "../components/cards";
import axios from "axios";

const ItemComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items/get-all-items")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setItems(res.data);
        } else {
          console.error("API response data is not an array:", res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {items.map((item) => (
        <FoodCards key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemComponent;
