import api from "../api/api";

const CategoriesSort = async allProducts => {
  const productSorted = {};
  const categories = await api.getAllCategories();
  console.log(categories);
  for (let i = 0; i < allProducts.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      if (allProducts[i].category === categories[j].title) {
        if (!productSorted[categories[j].title]) {
          productSorted[categories[j].title] = [];
        }
        productSorted[categories[j].title].push(allProducts[i]);
      }
    }
  }

  return productSorted;
};

export default CategoriesSort;
