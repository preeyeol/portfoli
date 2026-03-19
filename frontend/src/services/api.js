import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const sendMessage = (payload) => api.post('/messages', payload);
export const getActiveResume = () => api.get('/resume/active');

export const uploadResume = (file) => {
  const formData = new FormData();
  formData.append('resume', file);

  return api.post('/resume/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default api;
