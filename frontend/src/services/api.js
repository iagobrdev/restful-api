import axios from "axios";

const api = axios.create({
    baseURL: process.env.BOOKS_URL,
});

export default api;