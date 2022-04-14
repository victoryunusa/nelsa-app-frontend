import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

//Get products from api
const getAddresses = async (token, b_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${BaseUrl}/api/address/${b_id}`, config);

  return response.data;
};

const addressService = {
  getAddresses,
};

export default addressService;
