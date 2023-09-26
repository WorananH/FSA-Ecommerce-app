import { useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import ProductCard from "./Product/";
import Cart from "./Cart";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import SortCat from "./SortCat";

const ProductsData = ({ isShowCart, setIsShowCart }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

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
    } else {
      setFilterdProducts(products);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (search) {
      setFilterdProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilterdProducts(products);
    }
  }, [search]);

  console.log();

  return (
    <div className="container ">
      <div className="flex flex-wrap my-4 container mx-auto">
        <div className="container mx-auto my-4 flex justify-between">
          <Filter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* sort by  */}
          <SortCat
            filterdProducts={filterdProducts}
            setFilterdProducts={setFilterdProducts}
          />

          <SearchBar search={search} setSearch={setSearch} />
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
