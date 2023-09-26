import { useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import ProductCard from "./Product/";
import Cart from "./Cart";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const ProductsData = ({ isShowCart, setIsShowCart }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const getProduct = async () => {
      const result = await getAllProducts();
      console.log("dowloadingProducts", result);
      setProducts(result);
      setFilterdProducts(result);
    };
    getProduct();
  }, []);

  useEffect(() => {
    if (activeCategory !== "All") {
      setFilterdProducts(
        products.filter(
          product =>
            product.category.toLowerCase() === activeCategory.toLowerCase()
        )
      );
      console.log(filterdProducts);
    }
  }, [activeCategory]);

  console.log();

  return (
    <div className="container ">
      <div className="flex flex-wrap my-4 container mx-auto">
        <div className="container mx-auto my-4">
          <Filter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <SearchBar />
        </div>
        {filterdProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isShowCart && <Cart cart={cart} setIsShowCart={setIsShowCart} />}
    </div>
  );
};

export default ProductsData;
