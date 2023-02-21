import { clientCredentials } from '../client';

const getUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${uid}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getUser;
