import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import { photos } from "../portfolio/photos";

import styled from 'styled-components'

const Container = styled.div`
  font-family: "Dancing Script";
  

  h1 {
      margin-bottom: 10px;
      font-size: 2.5em;
  }
`

const BasicRows = () => {
    return (
        <Container>
            <h1>Photos By HellyDaya</h1>
            <ResponsiveGallery images={photos} useLightBox={true}/>
        </Container>
    )
};

export default BasicRows