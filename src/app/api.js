import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint) => {
  const response = await apiClient.get(endpoint);
  return response.data;
};

export const postData = async (endpoint, data) => {
  const response = await apiClient.post(endpoint, data);
  return response.data;
};

export const patchData = async (endpoint, data) => {
  const response = await apiClient.patch(endpoint, data);
  return response.data;
};

export const deleteData = async (endpoint) => {
  const response = await apiClient.delete(endpoint);
  return response.data;
};
