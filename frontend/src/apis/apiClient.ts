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

    // NOTE: GET 이외의 API 요청 시, 렌덤 에러 발생
    if (config.method?.toLowerCase() !== 'get' && Math.random() < 0.2) {
      throw new Error('테스트용 에러 발생');
    }

    return config;
  }
);

export default apiClient;
