import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }



  return (
    <div className="ShoppingList">
      <Filter 
      items={items} 
      onCategoryChange={handleCategoryChange}
      selectedCategory={selectedCategory}
      />
      
    </div>
  );
}

export default ShoppingList;
