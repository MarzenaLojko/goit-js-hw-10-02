import axios from 'axios';

let catApi = null;

export function init() {
  const apiKey =
    'live_MpaUbwcphieB86tM8zHJitWXNSTFDzh3N9G44xZfkNvZHY6vwmi6a7oo7S5nIr2t';
  catApi = require('axios').default;
  catApi.defaults.headers.common['x-api-key'] = apiKey;
}

export function fetchBreeds() {
  return catApi
    .get(`https://api.thecatapi.com/v1/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}

export function fetchCatByBreed(breedId) {
  return catApi
    .get(`https://api.thecatapi.com/v1/images/${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
}
