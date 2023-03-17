/* eslint-disable @next/next/no-img-element */
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
      <p style={{ margin: '5px' }} className="description">Welcome to <b style={{ color: 'rgb(85, 85, 85)' }}>Cozy Nest</b>! If you are designing your home and have lots of ideas, find inspiration from literally anywhere and everywhere and want to be THE designer of your home, but the process sounds daunting, then you have come to the right place! Store your future design plans here by adding the rooms you want to design and the pieces to complete your rooms. Hold yourself accountable when designing your cozy nest and visualize it through your design journey.</p>
      <button type="button" className="sign-in-btn" onClick={signIn}>
        Begin Designing
      </button>
    </div>
  );
}

export default Signin;
