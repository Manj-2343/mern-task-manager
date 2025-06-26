import api from "./api";

export const registerUser = async (formData) => {
  const res = await api.post("/authentication/register", formData);
  return res.data;
};
export const loginUser = async (formData) => {
  const res = await api.post("/authentication/login", formData);
  return res.data;
};
export const getTheProfile = async () => {
  const res = await api.get("/authentication/profile");
  return res.data;
};
export const refreshToken = async () => {
  const res = await api.post("/authentication/refresh-token");
};
export const logoutUser = async () => {
  await api.post("/authentication/logout");
};
