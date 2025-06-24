import api from "./api";

export const createTheTask = async (taskData) => {
  const res = await api.post("/tasks/", taskData);
  return res.data;
};
export const getTheTask = async () => {
  const res = await api.get("/tasks/");
  return res.data;
};
export const updateTheTask = async (id, taskData) => {
  const res = await api.put(`/tasks/${id}`, taskData);
  return res.data;
};
export const deleteTheTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};
