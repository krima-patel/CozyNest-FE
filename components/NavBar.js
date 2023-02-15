/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto">
          <Link passHref href="/">
            <Nav.Link>What&#39;s your Style?</Nav.Link>
          </Link>
        </Nav>
        <Nav className="me-auto">
          <Link passHref href="/rooms">
            <Nav.Link>Rooms</Nav.Link>
          </Link>
        </Nav>
        <Nav className="me-auto">
          <Link passHref href="/pieces">
            <Nav.Link>Pieces</Nav.Link>
          </Link>
        </Nav>
        <Nav className="me-auto">
          <Link passHref href="/rooms/new">
            <Nav.Link>Add a Room</Nav.Link>
          </Link>
        </Nav>
        <Nav className="me-auto">
          <Link passHref href="/pieces/new">
            <Nav.Link>Add a Piece</Nav.Link>
          </Link>
        </Nav>
        <NavDropdown.Item>
          <button type="button" className="btn btn-sign-out" onClick={signOut}>
            Sign Out
          </button>
        </NavDropdown.Item>
      </Container>
    </Navbar>
  );
}
