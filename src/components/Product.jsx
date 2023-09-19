import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[300px] border-2 border-['lightgray'] px-2 mr-8 mb-4 mt-5 rounded-lg ">
      <div className="w-[100px]">
        <img className="w-full h-full" src={product.image} alt={product.name} />
      </div>
      <p>{product.title}</p>
      <h3 className="text-blue-800 font-bold">$ {product.price}</h3>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-gray-300 w-full rounded-lg py-1 mt-auto text-green-800 mb-2 hover:bg-gray-400 hover:text-white"
      >
        Buy Now
      </button>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-gray-300 w-full rounded-lg py-1  text-green-800 mb-2 hover:bg-gray-400 hover:text-white"
      >
        View More Details
      </button>
    </div>
  );
};

export default ProductCard;
