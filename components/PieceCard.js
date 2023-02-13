import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function PieceCard({
  pieceType, imageUrl, source, condition,
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pieceType}</Card.Title>
        <Card.Img variant="top" src={imageUrl} alt={pieceType} style={{ height: '400px' }} className="card-img-top" />
        <Card.Text className="mb-2 text-muted">It&#39;s from {source}</Card.Text>
        <Card.Subtitle className="piece-condition">How I want this: {condition}</Card.Subtitle>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

PieceCard.propTypes = {
  pieceType: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
};
