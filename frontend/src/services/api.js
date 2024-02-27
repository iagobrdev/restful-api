import axios from "axios";

const api = axios.create({
    baseURL: 'https://books.iagobrdev.com.br',
});

export default api;