import React from 'react'
// import styled from 'styled-components'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Gallery = () => (
    <Container>
        <Row>
            <Col xs={6} md={4}><Image src="https://i.imgur.com/fy12gsL.jpg" thumbnail /></Col>
            <Col xs={6} md={4}><Image src="https://i.imgur.com/3MZqLls.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://i.imgur.com/fy12gsL.jpg" fluid /></Col>
        </Row>
        <Row>
            <Col xs={6} md={4}><Image src="https://i.imgur.com/fy12gsL.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://i.imgur.com/fy12gsL.jpg" fluid /></Col>
            <Col xs={6} md={4}><Image src="https://i.imgur.com/3MZqLls.jpg" fluid /></Col>
        </Row>
    </Container>
)

export default Gallery
