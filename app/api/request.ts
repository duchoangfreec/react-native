import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ENV } from "../constants";

const onErrorResponse = async (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const { status } = (error.response as AxiosResponse) ?? {};

    switch (status) {
      case 401: {
        // "refresh token"
        break;
      }
      case 403: {
        // "Permission denied"
        break;
      }
      case 404: {
        // "Invalid request"
        break;
      }
      case 500: {
        // "Server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }
  } else {
    // console.log(`\x1b[31m[[API] | Error ${error.message}\x1b[0m`);
  }

  // For other types of errors, reject the promise
  return Promise.reject(error);
};
axios.interceptors.request.use(function (config) {
  return config;
}, onErrorResponse);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return onErrorResponse(error);
  }
);

const request = async (url: string, options = {}) => {
  try {
    const res: AxiosResponse = await axios({
      method: "GET",
      url,
      baseURL: ENV.API_URL,
      ...options,
    });
    return res.data;
  } catch (err: unknown) {
    // return Promise.reject(err);
  }
};

export default request;
