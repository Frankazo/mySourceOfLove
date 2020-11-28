import React, { useState } from 'react';

import Gallery from "react-photo-gallery";
import { photos } from "../portfolio/photos";
import Modal from 'react-bootstrap/Modal'

import styled from 'styled-components'

const Container = styled.div`
  margin: 0 20px 20px 20px;
  font-family: "Dancing Script";
  

  h1 {
      margin-bottom: -1px;
      font-size: 2em;
  }
`

const Pic = styled.img`
  height: 100%;
  width: 100%;
`

const BasicRows = () => {
    const [show, setShow] = useState(false);
    const [img, setImg] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        setShow(true)
        setImg(event.target.src)
    };

    const modal = (
        <Modal size="lg" show={show} onHide={handleClose} centered>
            <Pic src={img} alt="current picture"/>
        </Modal>
    )

    return (
        <Container>
            <h1>Photos By HellyDaya</h1>
            <Gallery photos={photos} onClick={handleShow}/>
            {modal}
        </Container>
    )
};

export default BasicRows