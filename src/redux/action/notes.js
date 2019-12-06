import axios from 'axios';

export const getNotes = (search = '', page = 1, sort = '', category = '') => {
  return {
    type: 'GET_NOTES',
    payload: axios.get(
      `http://localhost:8002/api/v1/notes?search=${search}&page=${page}&sort=${sort}&category=${category}`,
    ),
  };
};

export const getMoreNotes = (
  search = '',
  page = 1,
  sort = '',
  category = '',
) => {
  return {
    type: 'MORE_NOTES',
    payload: axios.get(
      `http://localhost:8002/api/v1/notes?search=${search}&page=${page}&sort=${sort}&category=${category}`,
    ),
  };
};

export const getSearchNotes = (search = '', page = 1, sort = '') => {
  return {
    type: 'GET_SEARCH',
    payload: axios.get(
      `http://localhost:8002/api/v1/notes?search=${search}&page=${page}&sort=${sort}`,
    ),
  };
};

export const getNotesById = id => {
  return {
    type: 'GET_NOTE',
    payload: axios.get(`localhost:8002/api/v1/notes/${id}`),
  };
};

export const addNote = data => {
  return {
    type: 'ADD_NOTE',
    payload: axios.post(`http://localhost:8002/api/v1/notes`, data),
  };
};

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    payload: axios.delete(`localhost:8002/api/v1/notes/${id}`),
  };
};
