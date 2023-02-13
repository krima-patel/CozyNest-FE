import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function RoomCard({
  name, purpose, theme, mood, deadline,
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Purpose of Room: {purpose}</Card.Subtitle>
        <Card.Text className="mb-2 text-muted">Theme of Room: {theme}</Card.Text>
        <Card.Text className="mb-2 text-muted">Ambience: {mood}</Card.Text>
        <Card.Subtitle className="product-date">Expected Completion date: {deadline}</Card.Subtitle>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};
