import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

const register = async (userData) => {
  const response = await axios.post(`${BaseUrl}/api/register`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${BaseUrl}/api/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.clear();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
