import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

//Get products from api
const getProducts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${BaseUrl}/products/latest`, config);

  return response.data.products;
};

const productService = {
  getProducts,
};

export default productService;
