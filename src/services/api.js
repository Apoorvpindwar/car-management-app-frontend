import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";


export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

export const signupUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  return response.data;
};

export const fetchCars = async () => {
  const response = await axios.get(`${API_URL}/cars`);
  return response.data;
};

export const createCar = async (carData) => {
  const response = await axios.post(`${API_URL}/cars`, carData);
  return response.data;
};
