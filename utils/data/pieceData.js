import { clientCredentials } from '../client';

const getAllPieces = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/pieces`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createPiece = (piece) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/pieces`, {
    method: 'POST',
    body: JSON.stringify(piece),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updatePiece = (piece, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/pieces/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(piece),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getSinglePiece = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/pieces/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deletePiece = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/pieces/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getPieceByRoom = (id) => fetch(`${clientCredentials.databaseURL}/pieces?rooms=${id}`)
  .then((response) => (response.json()))
  .catch((error) => {
    console.error('Error:', error);
  });

export {
  getAllPieces,
  createPiece,
  updatePiece,
  getSinglePiece,
  deletePiece,
  getPieceByRoom,
};
