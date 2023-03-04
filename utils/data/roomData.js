import { clientCredentials } from '../client';
import { deletePiece, getPieceByRoom } from './pieceData';

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

const getRoomPieces = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteRoom = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteRoomPieces = (roomId) => new Promise((resolve, reject) => {
  getRoomPieces(roomId)
    .then((piecesArray) => {
      const deletePiecesPromises = piecesArray.map((piece) => deletePiece(piece.id));
      Promise.all(deletePiecesPromises).then(() => {
        deleteRoom(roomId).then(resolve);
      });
    }).catch((error) => reject(error));
});

const viewRoomDetails = (roomId) => new Promise((resolve, reject) => {
  getSingleRoom(roomId)
    .then((roomData) => {
      getPieceByRoom(roomId).then((pieceData) => {
        resolve({ roomData, pieceData });
      });
    })
    .catch((error) => reject(error));
});

const getUserRooms = (user) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms?user=${user}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getAllRooms,
  createRoom,
  updateRoom,
  getSingleRoom,
  getRoomPieces,
  deleteRoom,
  deleteRoomPieces,
  viewRoomDetails,
  getUserRooms,
};
