import { clientCredentials } from '../client';

const getStyles = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/styles`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getStyles;
