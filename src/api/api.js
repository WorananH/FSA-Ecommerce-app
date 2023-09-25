const BASE_URL = "https://fakestoreapi.com";
//get
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const productsData = await response.json();
    console.log("products", productsData);
    return productsData;
  } catch (error) {
    console.log(error);
  }
};

//get sorted products by description

export const getSortResults = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products?sort=desc`);
    const productsData = await response.json();
    return productsData;
  } catch (error) {
    console.log(error);
  }
};

//get all categories

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
};
//get products in specific  category

export const getProductsInCategory = async category => {
  try {
    const response = await fetch(`${BASE_URL}/products/${category}`);
    const productsData = await response.json();
    return productsData;
  } catch (error) {
    console.log(error);
  }
};

//getbyId

export const getSingleProduct = async productId => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};

//post

export const addNewProduct = async object => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: object.title,
        price: object.price,
        description: object.description,
        image: object.image,
        category: object.category,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//update

export const updateProductById = async object => {
  try {
    const response = await fetch(`${BASE_URL}/products/${product.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: object.title,
        price: object.price,
        description: object.description,
        image: object.image,
        category: object.category,
      }),
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};

//delete

export const deleteProduct = async productId => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const GetCategory = async category => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const productsData = await response.json();
    return productsData;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  console.log(`user: ${username} password: ${password}`);
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const loginData = await response.json();
    return loginData;
  } catch (error) {
    console.log(error);
  }
};

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

const api = {
  getAllProducts,
  getSortResults,
  getAllCategories,
  getSingleProduct,
  getProductsInCategory,
  addNewProduct,
  updateProductById,
  deleteProduct,
  GetCategory,
  loginUser,
};

export default api;
