import axios from 'axios';

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios.get(`http://localhost:8002/api/v1/categories`),
  };
};

export const addCategory = data => {
  return {
    type: 'ADD_CATEGORY',
    payload: axios.post(`http://localhost:8002/api/v1/categories`, data),
  };
};

export const removeCategory = id => {
  return {
    type: 'REMOVE_CATEGORY',
    payload: axios.delete(`http://localhost:8002/api/v1/categories/${id}`),
  };
};
