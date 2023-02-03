import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

//axios.defaults.withCredentials = true;

const register = async (userData) => {
  const response = await axios.post(`${BaseUrl}/auth/sign-up`, userData);
  if (response.data) {
    localStorage.setItem("user_email", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${BaseUrl}/auth/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const verify = async (userData) => {
  await axios.post(`${BaseUrl}/verify`, userData);
};

const logout = async (token) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // await axios.post(`${BaseUrl}/logout`);

  localStorage.clear();
};

const authService = {
  register,
  login,
  logout,
  verify,
};

export default authService;
