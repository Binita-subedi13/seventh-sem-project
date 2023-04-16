import { axiosInstance, axiosInstanceAuth } from "./../config/axiosInstance";

export const getMeApi = () => axiosInstanceAuth.get("/auth/me");

export const getProjects = () => axiosInstance.get("/project");

export const getDonations = () => axiosInstance.get("/donation");
