import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteRoom } from '../utils/data/roomData';
import { useAuth } from '../utils/context/authContext';

export default function RoomCard({
  id,
  name,
  purpose,
  deadline,
  user,
  onUpdate,
}) {
  const aUser = useAuth();
  const userId = aUser.user.uid;

  const deleteThisRoom = () => {
    if (window.confirm(`Are you are you want to delete ${name}?`)) {
      deleteRoom(id).then(() => onUpdate());
    }
  };
  console.warn(userId);
  console.error(user.uid);
  return (
    <Card className="cards" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Purpose of Room: {purpose}</Card.Subtitle>
        <Card.Subtitle className="product-date">Expected Completion date: {deadline}</Card.Subtitle>
        <h5 style={{ color: '#DC6434' }}>{aUser.user.userName}</h5>
        <img className="user-image" src={aUser.user.userImage} alt={aUser.user.userName} />
        {userId === user?.uid ? (
          <>
            <Link href={`/rooms/${id}`} passHref>
              <Button className="rooms-btns">Learn More</Button>
            </Link>
            <Link href={`/rooms/edit/${id}`} passHref>
              <Button className="rooms-btns">Update</Button>
            </Link>
            <Button onClick={deleteThisRoom} className="rooms-btn" id="delete-btn">
              Delete
            </Button>
          </>
        ) : (
          <Link href={`/rooms/${id}`} passHref>
            <Button className="rooms-btns">Learn More</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
