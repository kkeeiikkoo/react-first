import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

const hyRequest = new HYRequest(BASE_URL, TIME_OUT);
export default hyRequest;
