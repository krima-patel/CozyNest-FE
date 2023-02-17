import { clientCredentials } from '../client';

const getAllRooms = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createRoom = (room) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms`, {
    method: 'POST',
    body: JSON.stringify(room),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updateRoom = (room) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms/${room.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(room),
  })
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getSingleRoom = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

export {
  getAllRooms,
  createRoom,
  updateRoom,
  getSingleRoom,
};
