import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deletePiece } from '../utils/data/pieceData';

export default function PieceCard({
  id,
  pieceType,
  imageUrl,
  source,
  condition,
  onUpdate,
}) {
  const deleteThisPiece = () => {
    if (window.confirm(`Delete this ${pieceType}?`)) {
      deletePiece(id).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pieceType}</Card.Title>
        <Card.Img variant="top" src={imageUrl} alt={pieceType} style={{ height: '400px' }} className="card-img-top" />
        <Card.Text className="mb-2 text-muted">It&#39;s from {source}</Card.Text>
        <Card.Subtitle className="piece-condition">How I want this: {condition}</Card.Subtitle>
        <Link href={`/pieces/${id}`} passHref>
          <Button className="pieces-btns">More Info</Button>
        </Link>
        <Link href={`/pieces/edit/${id}`} passHref>
          <Button className="pieces-btns">Update</Button>
        </Link>
        <Button onClick={deleteThisPiece} className="pieces-btns" id="delete-btn">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

PieceCard.propTypes = {
  id: PropTypes.number.isRequired,
  pieceType: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
