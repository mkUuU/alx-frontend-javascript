import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise); // Should print: true
