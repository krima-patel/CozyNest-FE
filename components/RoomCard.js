/* eslint-disable @next/next/no-img-element */
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
  return (
    <Card className="cards" style={{ width: '18rem' }}>
      <Card.Body className="room-card-body">
        <img className="user-image" src={user?.image} alt={user.name} />
        <h5 className="username"><b>{user.name}</b> is designing</h5>
        <Card.Title style={{ textAlign: 'center', color: '#565264' }}>{name}</Card.Title>
        <Card.Subtitle className="purpose"><b style={{ color: '#565264' }}>Purpose of Room</b>: {purpose}</Card.Subtitle>
        <Card.Subtitle className="product-date"><b style={{ color: '#565264' }}>Expected Completion Date</b>: {deadline}</Card.Subtitle>
        {userId === user?.uid ? (
          <>
            <Link href={`/rooms/${id}`} passHref>
              <button type="button" className="rooms-btn">View</button>
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
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
