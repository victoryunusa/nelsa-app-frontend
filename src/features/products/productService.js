import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

//Get products from api
const getProducts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${BaseUrl}/products`, config);

  console.log(BaseUrl);

  return response.data;
};

const productService = {
  getProducts,
};

export default productService;
