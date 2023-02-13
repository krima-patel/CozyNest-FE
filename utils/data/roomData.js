import { clientCredentials } from '../client';

const getAllRooms = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getAllRooms };
