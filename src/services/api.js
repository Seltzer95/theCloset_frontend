import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://thecloset-backend.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const itemsAPI = {
  // Get all items
  getAllItems: async () => {
    const response = await api.get('/items');
    return response.data;
  },

  // Get item by ID
  getItemById: async (id) => {
    const response = await api.get(`/items/${id}`);
    return response.data;
  },

  // Search items
  searchItems: async (query) => {
    const response = await api.get(`/items/search?q=${query}`);
    return response.data;
  },
};

export default api;
