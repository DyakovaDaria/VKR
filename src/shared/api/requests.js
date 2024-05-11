import axios from "axios";
import { useDispatch } from "react-redux";
import { clearAuthState } from "../../features/Login";

const BASE_URL = "http://localhost:7001";

export const apiRequest = async (method, path, params = {}, headers = {}) => {
  try {
    console.log("api request ");
    const response = await axios({
      method: method,
      url: `${BASE_URL}${path}`,
      params: { ...params },
      headers: {
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      console.error("Unauthorized access detected. Please login again.");
      localStorage.removeItem('token');
      window.location.reload();
    } else {
      throw error;
    }
  }
};
