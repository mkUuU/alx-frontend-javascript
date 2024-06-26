import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();  // You can also test with Promise.reject()
handleResponseFromAPI(promise);
