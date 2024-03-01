import axios from "axios";

const api = axios.create({
    baseURL: 'https://books.iagobrdev.com.br',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Configuração global de CORS
api.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://iagobrdev.com.br';
api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

export default api;