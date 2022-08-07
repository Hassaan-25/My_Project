import axiosInstance from "./api.config";

export const signup = async (payload) => {
  try {
    const result = await axiosInstance.post(`/user/save`, payload);
    return result.data;
  } catch (error) {
    throw error.response;
  }
};

export const login = async (payload) => {
  try {
    const result = await axiosInstance.post(`/login`, payload);
    return result.data;
  } catch (error) {
    throw error.response;
  }
};

export const fetchUsers = async () => {
  try {
    const result = await axiosInstance.get(`/user/fetch`);
    return result.data;
  } catch (error) {
    throw error.response;
  }
};

export const addOrder = async (payload) => {
  try {
    const result = await axiosInstance.post(`/orders`, payload);
    return result.data;
  } catch (error) {
    throw error.response;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const result = await axiosInstance.delete(`/orders/${orderId}`);
    return result.data;
  } catch (error) {
    throw error.response;
  }
};
