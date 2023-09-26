export const sortPriceAscending = (filteredProducts, setFilteredProducts) => {
  console.log(filteredProducts);
  filteredProducts.sort((a, b) => a.price - b.price);
  console.log(filteredProducts);
  setFilteredProducts(filteredProducts);
};

export const sortPriceDescending = (filteredProducts, setFilteredProducts) => {
  filteredProducts.sort((a, b) => b.price - a.price);
  setFilteredProducts(filteredProducts);
};

export const sortTitleAscending = (filteredProducts, setFilteredProducts) => {
  filteredProducts.sort((a, b) => a.title - b.title);
  setFilteredProducts(filteredProducts);
};

export const sortTitleDescending = (filteredProducts, setFilteredProducts) => {
  filteredProducts.sort((a, b) => b.title - a.title);
  setFilteredProducts(filteredProducts);
};

const sort = {
  sortPriceAscending,
  sortPriceDescending,
  sortTitleAscending,
  sortTitleDescending,
};

export default sort;
