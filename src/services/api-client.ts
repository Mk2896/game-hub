import axios from "axios";
import config from "../config";

export default axios.create({
  baseURL: config.BASE_URL,
  params: {
    key: config.API_KEY,
  },
});
