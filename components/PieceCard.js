import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function PieceCard({
  id,
  pieceType,
  imageUrl,
  source,
  condition,
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pieceType}</Card.Title>
        <Card.Img variant="top" src={imageUrl} alt={pieceType} style={{ height: '400px' }} className="card-img-top" />
        <Card.Text className="mb-2 text-muted">It&#39;s from {source}</Card.Text>
        <Card.Subtitle className="piece-condition">How I want this: {condition}</Card.Subtitle>
        <Link href={`/pieces/edit/${id}`} passHref>
          <Button className="pieces-btns">Update</Button>
        </Link>
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
};
