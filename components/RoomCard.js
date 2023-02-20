import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';
import { deleteRoom } from '../utils/data/roomData';

export default function RoomCard({
  id,
  name,
  purpose,
  theme,
  mood,
  deadline,
  onUpdate,
}) {
  // const { user } = useAuth();

  const deleteThisRoom = () => {
    if (window.confirm(`Are you are you want to delete ${name}?`)) {
      deleteRoom(id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Purpose of Room: {purpose}</Card.Subtitle>
        <Card.Text className="mb-2 text-muted">Theme of Room: {theme}</Card.Text>
        <Card.Text className="mb-2 text-muted">Ambience: {mood}</Card.Text>
        <Card.Subtitle className="product-date">Expected Completion date: {deadline}</Card.Subtitle>
        <Link href={`/rooms/${id}`} passHref>
          <Button className="rooms-btns">Learn More</Button>
        </Link>
        <Link href={`/rooms/edit/${id}`} passHref>
          <Button className="rooms-btns">Update</Button>
        </Link>
        <Button onClick={deleteThisRoom} className="rooms-btns" id="delete-btn">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
