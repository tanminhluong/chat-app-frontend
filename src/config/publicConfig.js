import axios from "axios";

export const BASE_URL = "https://chat-api-5eit.onrender.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
