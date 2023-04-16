import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3500",
});

export const axiosInstanceAuth = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    authentication: localStorage.getItem("token"),
  },
});
