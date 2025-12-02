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
    const response = await api.get('/buyer/browse');
    return response.data.items; // Backend returns { totalItems, filters, items }
  },

  // Get item by ID
  getItemById: async (id) => {
    const response = await api.get(`/buyer/browse`);
    const item = response.data.items.find(item => item.id === id);
    return item;
  },

  // Search items
  searchItems: async (query) => {
    const response = await api.get('/buyer/browse');
    const items = response.data.items;
    // Client-side filtering since backend doesn't have search endpoint
    return items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.brand && item.brand.toLowerCase().includes(query.toLowerCase()))
    );
  },
};

export default api;
