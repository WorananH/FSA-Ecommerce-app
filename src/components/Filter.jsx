import { useState, useEffect } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

const Filter = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoriesData = await api.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const onSelectCategory = category => {
    setActiveCategory(category); // Clear the categories
    console.log(category); // Log the selected category
  };
  console.log(categories, "Filters test!");

  return (
    <div className="flex">
      <div className="container text-left">
        {/* Filters */}
        <div className="flex justify-center pt-100">
          {categories.map(category => (
            <div
              key={category.id}
              onClick={() => {
                setActiveCategory(category);
                // onSelectCategory(category.id);
              }}
            >
              {category.title}
            </div>
          ))}
        </div>
        <h3>Categories</h3>
        <select
          value={activeCategory}
          onChange={e => onSelectCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Jewelery">Jewelery</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Women's Clothing">Women's Clothing</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
