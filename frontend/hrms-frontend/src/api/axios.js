import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-lite-iy49.onrender.com",
});

export default api;
