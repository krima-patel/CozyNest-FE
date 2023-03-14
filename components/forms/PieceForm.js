import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createPiece, updatePiece } from '../../utils/data/pieceData';
import { getUserRooms } from '../../utils/data/roomData';
import getStyles from '../../utils/data/styleData';

const initialState = {
  room_id: 0,
  piece_type: '',
  image_url: '',
  source: '',
  condition: 'New',
  designs: [],
};

const PieceForm = ({ pieceObj }) => {
  const [pieceFormInput, setPieceFormInput] = useState(initialState);
  const [userRooms, setUserRooms] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  console.warn(user.id);

  useEffect(() => {
    getUserRooms(user.id).then(setUserRooms);
    if (pieceObj?.id) {
      console.warn(pieceObj);
      // eslint-disable-next-line react/prop-types
      const designStyles = pieceObj.designs?.map((design) => ({
        value: design.style.id,
        label: design.style.style,
      }));

      setPieceFormInput({
        room_id: pieceObj.room.id,
        piece_type: pieceObj.piece_type,
        image_url: pieceObj.image_url,
        source: pieceObj.source,
        condition: pieceObj.condition,
        designs: designStyles,
        user: user.id,
      });
    }
  }, [pieceObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPieceFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const designsHandleChange = (selected) => {
    setPieceFormInput((prevState) => ({
      ...prevState,
      designs: selected,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pieceObj?.id) {
      pieceFormInput.designs = pieceFormInput.designs.map((design) => design.value);
      updatePiece(pieceFormInput, pieceObj.id).then(() => router.push('/pieces'));
    } else {
      const payload = { ...pieceFormInput, user: user.id };
      payload.designs = payload.designs.map((design) => design.value);
      createPiece(payload).then(() => router.push('/pieces'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>What type of piece is this?</Form.Label>
          <Form.Control name="piece_type" required value={pieceFormInput.piece_type} onChange={handleChange} />
          <Form.Label>Where did you find this piece?</Form.Label>
          <Form.Control name="source" required value={pieceFormInput.source} onChange={handleChange} />
          <Form.Label>Attach an Image of the Piece</Form.Label>
          <Form.Control name="image_url" required value={pieceFormInput.image_url} onChange={handleChange} />
          <FloatingLabel controlId="floatingSelect" label="Do you want this product new, used, or you want to DIY?">
            <Form.Select aria-label="Piece Condition" type="text" name="condition" value={pieceFormInput?.condition} onChange={handleChange} className="mb-3" required>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="DIY">DIY</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Select the room this piece belongs to">
            <Form.Select aria-label="Room" name="room_id" value={pieceFormInput.room_id?.id} onChange={handleChange} className="mb-3" required>
              <option value="">Select Room</option>
              {userRooms?.map((room) => (
                <option
                  key={room.id}
                  value={room.id}
                  label={room.name}
                  // instead of selected, can also add defaultValue
                  selected={pieceFormInput?.room_id === room.id}
                >
                  {room.name}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Label>Select the Interior Design Styles</Form.Label>
        <AsyncSelect isMulti name="designs" value={pieceFormInput.designs} loadOptions={getStyles} defaultOptions className="basic-multi-select" classNamePrefix="select" onChange={designsHandleChange} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

PieceForm.propTypes = {
  pieceObj: PropTypes.shape({
    room_id: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    id: PropTypes.string,
    room: PropTypes.string,
    piece_type: PropTypes.string,
    image_url: PropTypes.string,
    source: PropTypes.string,
    condition: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.number,
    }),
  }).isRequired,
};

export default PieceForm;
