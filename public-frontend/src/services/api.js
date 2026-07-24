import axios from "axios";

const api = axios.create({
  baseURL: "https://cms-backend-j4po.onrender.com/api",
});

export default api;