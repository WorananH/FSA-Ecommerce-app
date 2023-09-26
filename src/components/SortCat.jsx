import { useState } from "react";
import sort from "../utils/Sort";

const SortCat = ({ filterdProducts, setFilterdProducts }) => {
  const [sortByType, setSortByType] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSortCat = e => {
    setSortByType(e.target.value);

    if (e.target.value === "title") {
      const sortedProducts = [...filterdProducts]; // Make a copy of your products array

      if (sortOrder === "" || sortOrder === "ascending") {
        // Sort by title ascending
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        // Sort by title descending
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      }

      // Update your sorted products in the state or wherever you store them
      setFilterdProducts(sortedProducts);
    } else if (e.target.value === "price") {
      const sortedProducts = [...filterdProducts]; // Make a copy of your products array

      if (sortOrder === "" || sortOrder === "ascending") {
        // Sort by price ascending
        sortedProducts.sort((a, b) => a.price - b.price);
      } else {
        // Sort by price descending
        sortedProducts.sort((a, b) => b.price - a.price);
      }

      // Update your sorted products in the state or wherever you store them
      setFilterdProducts(sortedProducts);
    }
  };

  const handleSortOrder = e => {
    setSortOrder(e.target.value);
    if (e.target.value === "ascending") {
      const sortedProducts = [...filterdProducts]; // Make a copy of your products array

      if (sortByType === "" || sortByType === "title") {
        // Sort by title ascending
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        // Sort by price ascending
        sortedProducts.sort((a, b) => a.price - b.price);
      }

      // Update your sorted products in the state or wherever you store them
      setFilterdProducts(sortedProducts);
    } else if (e.target.value === "descending") {
      const sortedProducts = [...filterdProducts]; // Make a copy of your products array

      if (sortByType === "" || sortByType === "price") {
        // Sort by price descending
        sortedProducts.sort((a, b) => b.price - a.price);
      } else {
        // Sort by title descending
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      }

      // Update your sorted products in the state or wherever you store them
      setFilterdProducts(sortedProducts);
    }
  };

  return (
    <div>
      <select
        className="form-control"
        value={sortByType}
        onChange={handleSortCat}
      >
        <option value="">Sort By</option>
        <option value="title">Name</option>
        <option value="price">Price</option>
      </select>
      <select
        className="form-control"
        value={sortOrder}
        onChange={handleSortOrder}
      >
        <option value="">Sort Order</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default SortCat;
