import { useState, useEffect } from "react";
import { getAllProducts } from "../api/api";
import ProductCard from "./Product/";
import Cart from "./Cart";
import Filter from "./Filter";

const ProductsData = ({ isShowCart, setIsShowCart }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const result = await getAllProducts();
      console.log("dowloadingProducts", result);
      setProducts(result);
      setFilterdProducts(result);
    };
    getProduct();
  }, []);

  return (
    <div className="container ">
      <div className="flex flex-wrap my-4 container mx-auto">
        <Filter products={products} setFilterdProducts={setFilterdProducts} />
        {filterdProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isShowCart && <Cart cart={cart} setIsShowCart={setIsShowCart} />}
    </div>
  );
};

export default ProductsData;
