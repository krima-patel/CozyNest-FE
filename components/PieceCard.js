/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { deletePiece } from '../utils/data/pieceData';
import { useAuth } from '../utils/context/authContext';

export default function PieceCard({
  id,
  pieceType,
  imageUrl,
  user,
  onUpdate,
}) {
  const aUser = useAuth();
  const userId = aUser.user.uid;
  const deleteThisPiece = () => {
    if (window.confirm(`Delete this ${pieceType}?`)) {
      deletePiece(id).then(() => onUpdate());
    }
  };
  return (
    <Card className="cards" style={{ width: '18rem' }}>
      <Card.Body>
        <img className="user-image" src={user?.image} alt={user.name} />
        <h5 style={{ color: '#a06881' }}><b>{user.name}</b> likes this piece:</h5>
        <Card.Title>{pieceType}</Card.Title>
        <Card.Img variant="top" src={imageUrl} alt={pieceType} style={{ height: '300px' }} className="card-img-top" />
        {userId === user?.uid ? (
          <>
            <Link href={`/pieces/${id}`} passHref>
              <button type="button" className="pieces-btns">View More</button>
            </Link>
            <Link href={`/pieces/edit/${id}`} passHref>
              <button type="button" className="pieces-btns">Update</button>
            </Link>
            <button type="button" onClick={deleteThisPiece} className="pieces-btns" id="delete-btn">
              Delete
            </button>
          </>
        ) : (
          <Link href={`/pieces/${id}`} passHref>
            <button type="button" className="pieces-btns">View More</button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

PieceCard.propTypes = {
  id: PropTypes.number.isRequired,
  pieceType: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
