import axios from "axios";

export const http = axios.create({
  baseURL: `http://localhost:3000/api`,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
