import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use(
  config => {
    config.headers.Authorization = 'hello-world';
    return config;
  }
);

export default apiClient;
