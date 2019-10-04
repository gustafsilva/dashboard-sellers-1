import {
  BASE_API,
  headers,
} from '../utils';

export const fetchAllProducts = () => (
  fetch(`${BASE_API}/posts`, headers)
    .then(convertJSON)
);

export const getPost = id => (
  fetch(`${BASE_API}/posts/${id}`, headers)
    .then(convertJSON)
);