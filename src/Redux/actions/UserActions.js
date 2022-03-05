import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../Constants/UserConstants";

const BaseUrl = process.env.REACT_APP_BASE_API_URL;

export const login = (email, password) => async (dispatch) => {
  try {
    const user = { email, password };
    dispatch({ type: USER_LOGIN_REQUEST });
    let data = await fetch(`${BaseUrl}/api/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    data = await data.json();
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
