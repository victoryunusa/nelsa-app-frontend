import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

//Get products from api
const getCategories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${BaseUrl}/categories/`, config);

  return response.data;
};

const categoriesService = {
  getCategories,
};

export default categoriesService;
