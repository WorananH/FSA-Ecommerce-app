import { useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import ProductCard from "./Product/";
import Cart from "./Cart";

const ProductsData = ({ isShowCart, setIsShowCart, handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const result = await getAllProducts();
      console.log(result);
      setProducts(result);
      setFilters(result);
    };
    getProduct();
  }, []);

  return (
    <div className="container ">
      <div className="flex flex-wrap my-4 container mx-auto">
        {products.map(product => (
          <ProductCard
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {isShowCart && <Cart setIsShowCart={setIsShowCart} />}
    </div>
  );
};

export default ProductsData;
