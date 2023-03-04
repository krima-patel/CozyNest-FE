/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <img className="sign-in-image" width={270} style={{ margin: '0 auto' }} src="/./images/CozyNestLogo.png" />
      <p style={{ margin: '5px' }}><b>Cozy Nest</b> is an application for those who love interior design and decor. If you are designing your home and have lots of ideas, find inspiration everywhere but become inendated with your design goals, you have come to the right place. Store your future design plans here for your space here by adding the rooms you want to design and the pieces to complete your room. Hold yourself accountable when designing to create your cozy nest.</p>
      <h4>Click the button below to start designing!</h4>
      <button type="button" className="sign-in-btn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
