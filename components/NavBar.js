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
    <Navbar className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto-navbar">
          <Link passHref href="/">
            <Nav.Link className="navbar-links" style={{ color: 'white' }}>What&#39;s your Style?</Nav.Link>
          </Link>
        </Nav>
        <Nav className="me-auto-navbar">
          <Link passHref href="/rooms">
            <Nav.Link className="navbar-links" style={{ color: 'white' }}>Browse Rooms</Nav.Link>
          </Link>
        </Nav>
        <Nav className="me-auto-navbar">
          <Link passHref href="/pieces">
            <Nav.Link className="navbar-links" style={{ color: 'white' }}>Browse Pieces</Nav.Link>
          </Link>
        </Nav>
        <NavDropdown className="nav-dropdown" style={{ color: 'white' }}>
          <Link passHref href="/">
            <NavDropdown.Item>What&#39;s your style?</NavDropdown.Item>
          </Link>
          <Link passHref href="/rooms">
            <NavDropdown.Item>Browse Rooms</NavDropdown.Item>
          </Link>
          <Link passHref href="/pieces">
            <NavDropdown.Item>Browse Pieces</NavDropdown.Item>
          </Link>
          <Link passHref href="/rooms/new">
            <NavDropdown.Item>Add Your Room</NavDropdown.Item>
          </Link>
          <Link passHref href="/pieces/new">
            <NavDropdown.Item>Add A Piece</NavDropdown.Item>
          </Link>
          <NavDropdown.Item>
            <button type="button" className="btn btn-sign-out" onClick={signOut}>
              Sign Out
            </button>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}
