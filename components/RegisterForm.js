import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    uid: user.uid,
    name: '',
    bio: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h1 style={{ textAlign: 'center' }}>Welcome to <b>Cozy Nest</b>! Begin Your Design Journey Here!</h1>
        <h5 style={{ textAlign: 'left' }}>Thank you for wanting to join! Tell us a little about yourself so the Cozy Nest community can get to know you!</h5>
        <Form.Label>Enter Your Username</Form.Label>
        <Form.Control as="textarea" name="name" required placeholder="Your Username" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>What&#39;s Your Design Style? Give us a little design bio. It does not have to be specific, your style is uniquely yours, so describe it as such.</Form.Label>
        <Form.Control as="textarea" name="bio" required placeholder="Enter your Design Style/Bio" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Add Your Profile Picture Here</Form.Label>
        <Form.Control as="textarea" name="image" required placeholder="Your Profile Picture Here" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
      </Form.Group>
      <Button variant="success" type="submit" className="form-btn">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
