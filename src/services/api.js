import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5002/api",
  withCredentials: true, //for the refresh token
});
export default api;
