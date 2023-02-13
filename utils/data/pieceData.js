import { clientCredentials } from '../client';

const getAllPieces = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/pieces`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

export { getAllPieces };
