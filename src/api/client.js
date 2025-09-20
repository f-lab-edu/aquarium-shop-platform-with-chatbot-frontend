import axios from "axios";

const API_BASE_URL = "http://0.0.0.0:8001";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10초 타임아웃
});

apiClient.interceptors.request.use(
  (config) => {
    // 토큰이 있다면 헤더에 추가 (나중에 구현)
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리
    if (error.response) {
      console.error("API Error:", error.response.data);

      // 401 Unauthorized - 토큰 만료 등
      if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        // 나중에 로그인 페이지로 리다이렉트 또는 refresh token 처리
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
