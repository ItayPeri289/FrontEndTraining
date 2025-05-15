import * as React from "react";
import productsArray from "../data/Products.json";
import MediaCard from "../components/MediaCard";
import "./AllCards.css";

export default function AllCards() {
  
  return (
    <div className="items">
      {productsArray.map((item) => (
        <MediaCard
          imageUrl={item.image}
          description={item.description}
          title={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
