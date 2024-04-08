import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/pooch-book-removebg-preview.png";
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="70" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink to="/">
              <i className="fa-solid fa-house-chimney"></i>Home
            </NavLink>
            <NavLink to="/signin">
              <i className="fa-solid fa-right-to-bracket"></i>Sign In
            </NavLink>
            <NavLink to="/signup">
              <i className="fa-solid fa-user-plus"></i>Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
