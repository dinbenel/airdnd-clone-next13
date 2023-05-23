import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://airdnd-clone-next13.vercel.app/api";

export const http = axios.create({
  baseURL: "https://airdnd-clone-next13.vercel.app/api",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
