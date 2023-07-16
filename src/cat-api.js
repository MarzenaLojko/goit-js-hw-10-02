import axios from 'axios';

let catApi = null;

export function init(api_key) {
  catApi = require('axios').default;
  catApi.defaults.headers.common['x-api-key'] = api_key;
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
