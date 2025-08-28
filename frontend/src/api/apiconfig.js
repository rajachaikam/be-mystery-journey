// src/api/apiConfig.js
export const API_BASE_URL = import.meta.env.MODE === "development"
  ? import.meta.env.VITE_API_URL_LOCAL
  : import.meta.env.VITE_API_URL_PROD;
