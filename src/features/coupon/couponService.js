import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

//Get products from api
const getCoupon = async ({ token, code }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${BaseUrl}/coupon/apply?code=${code}`,
    config
  );

  return response.data;
};

const couponService = {
  getCoupon,
};

export default couponService;
