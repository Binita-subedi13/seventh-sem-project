import { axiosInstance, axiosInstanceAuth } from "./../config/axiosInstance";

export const loginApi = (userData) =>
  axiosInstance.post("/auth/login", userData);

export const registerApi = (userData) =>
  axiosInstance.post("/auth/register", userData);

export const postProjectApi = (projectData) => {
  return axiosInstanceAuth.post("/project/", projectData);
};

export const postDonationApi = (projectId, price) => {
  return axiosInstanceAuth.post(`/donation/${projectId}`, { price });
};
