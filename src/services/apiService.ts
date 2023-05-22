import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://airdnd-clone-next13-ks6m.vercel.app/";

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
