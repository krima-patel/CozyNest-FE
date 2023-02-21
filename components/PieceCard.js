import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
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
        <Card.Title>{pieceType}</Card.Title>
        <Card.Img variant="top" src={imageUrl} alt={pieceType} style={{ height: '300px' }} className="card-img-top" />
        <h5 style={{ color: '#DC6434' }}>{aUser.user.userName}</h5>
        <img className="user-image" src={aUser.user.userImage} alt={aUser.user.userName} />
        {userId === user.uid ? (
          <>
            <Link href={`/pieces/${id}`} passHref>
              <Button className="pieces-btns">More Info</Button>
            </Link>
            <Link href={`/pieces/edit/${id}`} passHref>
              <Button className="pieces-btns">Update</Button>
            </Link>
            <Button onClick={deleteThisPiece} className="pieces-btns" id="delete-btn">
              Delete
            </Button>
          </>
        ) : (
          <Link href={`/pieces/${id}`} passHref>
            <Button className="pieces-btns">Learn More</Button>
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
  user: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
