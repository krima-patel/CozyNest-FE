/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
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
        <img className="user-image" src={aUser.user.userImage} alt={aUser.user.userName} />
        <h5 className="username"><b>{aUser.user.userName}</b> is designing...</h5>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Purpose of Room: {purpose}</Card.Subtitle>
        <Card.Subtitle className="product-date">Expected Completion date: {deadline}</Card.Subtitle>
        {userId === user?.uid ? (
          <>
            <Link href={`/rooms/${id}`} passHref>
              <button type="button" className="rooms-btn">View More</button>
            </Link>
            <Link href={`/rooms/edit/${id}`} passHref>
              <button type="button" className="rooms-btn">Update</button>
            </Link>
            <button type="button" onClick={deleteThisRoom} className="rooms-btn" id="delete-btn">
              Delete
            </button>
          </>
        ) : (
          <Link href={`/rooms/${id}`} passHref>
            <button type="button" className="rooms-btn">View More</button>
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
