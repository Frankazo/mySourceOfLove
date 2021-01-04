import React from 'react'
import styled from 'styled-components'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Icon = styled.img`
  width: 40px;
  height: auto;
`

const MyNavbar = styled(Navbar)`
  height: 75px;
`



const Footer = () => {
    return (
    <MyNavbar sticky="bottom" bg="dark" variant="dark">
      <Navbar.Brand className="footer-logo" href="#home" style={{fontFamily: `Dancing Script`, cursive: `true`, fontSize: `1.6em`}}>My Source of Love</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto footer-logo">
          <Nav.Link href="#copyrigth" disabled>All Rights Reserved</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.instagram.com/mysourceoflove/" target="_blank" rel="noopener noreferrer"><Icon src={require(`../images/instagram.svg`)} alt="Instagram" />
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/mysourceoflove/" target="_blank" rel="noopener noreferrer"><Icon src={require(`../images/facebook.svg`)} alt="Facebook" />
          </Nav.Link>
          <Nav.Link href="https://twitter.com/hellyydaya" target="_blank" rel="noopener noreferrer"><Icon src={require(`../images/twitter.svg`)} alt="Twitter" />
          </Nav.Link>
          <Nav.Link href="https://www.youtube.com/channel/UCQK5tCDg6zGWBsmaEn1Gu7Q" target="_blank" rel="noopener noreferrer"><Icon src={require(`../images/youtube.svg`)} alt="Youtube" />
          </Nav.Link>
          <Nav.Link href="mailto: HellyDayana@sourceoflove.com"><Icon src={require(`../images/envelope.svg`)} alt="Email" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </MyNavbar>
    )
}

export default Footer