import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createRoom, updateRoom } from '../../utils/data/roomData';

const initialState = {
  id: 0,
  name: '',
  purpose: '',
  theme: '',
  mood: '',
  deadline: '',
};

const RoomForm = ({ roomObj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  const getAndSet = () => {
    if (roomObj?.id) {
      setFormInput(roomObj);
    }
  };

  useEffect(() => {
    getAndSet();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomObj?.id) {
      updateRoom(formInput).then(() => router.push('/rooms'));
    } else {
      const payload = { ...formInput, user: user.id, date: new Date().toDateString() };
      delete payload.id;
      createRoom(payload).then(() => router.push('/rooms'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>What room is this?</Form.Label>
          <Form.Control name="name" type="text" required value={formInput.name} onChange={handleChange} />
          <Form.Label>What purpose will this room serve?</Form.Label>
          <Form.Control name="purpose" type="text" required value={formInput.purpose} onChange={handleChange} />
          <Form.Label>What is the theme?</Form.Label>
          <Form.Control name="theme" type="text" required value={formInput.theme} onChange={handleChange} />
          <Form.Label>What ambience do you want to create?</Form.Label>
          <Form.Control name="mood" type="text" required value={formInput.mood} onChange={handleChange} />
          <Form.Label>When do you want to have this room complete?</Form.Label>
          <Form.Control name="deadline" type="date" required value={formInput.deadline} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  );
};

RoomForm.propTypes = {
  roomObj: PropTypes.shape({
    id: PropTypes.number,
  }),
};

RoomForm.defaultProps = {
  roomObj: initialState,
};

export default RoomForm;
