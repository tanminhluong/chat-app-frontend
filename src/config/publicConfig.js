import axios from "axios";

export const BASE_URL = "https://chat-app-byx2.onrender.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
