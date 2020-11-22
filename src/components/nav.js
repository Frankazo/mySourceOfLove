import React from 'react'
// import styled from 'styled-components'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="light">
      <Navbar.Brand href="#home" style={{fontFamily: `Dancing Script`, cursive: `true`, fontSize: `2.2em`}}>My Source of Love</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" style={{fontFamily: `Dancing Script`, fontSize: `1.5em`}}>
          <Nav.Link href="https://mysourceoflove.pic-time.com/-porfolio/gallery" target="_blank" style={{color: `#000`}}>Portfolio</Nav.Link>
          <Nav.Link href="#pricing" disabled> Shop</Nav.Link>
          <Nav.Link href="#pricing" disabled>Blog</Nav.Link>
        </Nav>
        <Nav>
        <p style={{fontFamily: `Dancing Script`, cursive: `true`, fontSize: `1.5em`}}>By Helly Dayana</p>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation