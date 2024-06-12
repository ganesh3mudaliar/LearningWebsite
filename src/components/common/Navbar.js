import React from 'react';
import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='navbarcss'>
      <BootstrapNavbar expand="lg">
        <Container className='elements'>
          <BootstrapNavbar.Brand href="#home">Learn Programming</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button variant="link" className="nav-link" onClick={() => {window.location.href = "/";}}>Home</Button>
              <Button variant="link" className="nav-link" onClick={() => navigate("components/pages/Courses")}>Courses</Button>
              <Button variant="link" className="nav-link" onClick={() => navigate("components/pages/About")}>About</Button>
              <Button variant="link" className="nav-link" onClick={() => navigate("components/pages/Contact")}>Contact</Button>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
        <Nav className="ml-auto mx-5">
          <Button variant="link" className="nav-link" onClick={() => navigate("components/pages/Login")}>Login</Button>
          <Button variant="link" className="nav-link" onClick={() => navigate("components/pages/Signup")}>Signup</Button>
        </Nav>
      </BootstrapNavbar>
    </div>
  );
}
