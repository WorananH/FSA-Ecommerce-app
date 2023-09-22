import { useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import ProductCard from "./Product/";
import Cart from "./Cart";

const ProductsData = ({ isShowCart, setIsShowCart }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isShowCart && <Cart cart={cart} setIsShowCart={setIsShowCart} />}
    </div>
  );
};

export default ProductsData;
