import categoriesSort from "./categoriesSort";

export const sortPriceLoToHight = async Product => {
  const productInCart = [...Product.cart];
  productInCart.sort((a, b) => a.price - b.price);

  const category = await categoriesSort(productInCart);
  return category;
};

export const sortPriceHightToLow = async Product => {
  const productInCart = [...Product.cart];
  productInCart.sort((a, b) => b.price - a.price);

  const category = await categoriesSort(productInCart);
  return category;
};

export const sortPriceLessThanHundred = async Product => {
  const productInCart = [...Product.cart];
  const filteredProducts = productInCart.filter(product => product.price < 100);

  const category = await categoriesSort(filteredProducts);
  return category;
};

const sort = {
  priceLoToHight: sortPriceLoToHight,
  priceHightToLow: sortPriceHightToLow,
  priceLessThanHundred: sortPriceLessThanHundred,
};

export default sort;
