import React, { useState, useEffect } from "react";

const Filter = ({ products, setFilterdProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(300);
  const [sortBy, setSortBy] = useState("price");
  console.log("onLoad", products);

  function selectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function selectSortBy(e) {
    setSortBy(e.target.value);
  }

  function sortByPrice(ascending) {
    let filteredProducts = [...products];
    filteredProducts.sort((a, b) => {
      if (!ascending) {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
    console.log("filtered", filteredProducts);
    //setProducts(filteredProducts);
  }

  useEffect(() => {
    console.log("priceRangeChange", priceRange);
    let filteredProducts = [...products];
    console.log("original", products);
    filteredProducts = filteredProducts.filter(
      product => product.price <= priceRange
    );
    // return product.price <= priceRange;

    console.log("filtered", filteredProducts);
    setFilterdProducts(filteredProducts);
  }, [priceRange]);

  return (
    <div>
      <h1>Products</h1>
      <select onChange={selectCategory}>
        <option value="all">All</option>
        {categories.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="range"
        min="0"
        max="300"
        value={priceRange}
        onChange={e => setPriceRange(e.target.value)}
      />
      <p>Price Range:$ {priceRange}</p>
      <h3>Sort By</h3>
      <select value={sortBy} onChange={selectSortBy}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <ul></ul>
    </div>
  );
};

export default Filter;
