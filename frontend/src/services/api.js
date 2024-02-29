import axios from "axios";

const api = axios.create({
    baseURL: 'https://books.iagobrdev.com.br',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    config.headers['Origin'] = 'https://iagobrdev.com.br';
    return config;
});

export default api;