import React from 'react'
import styled from 'styled-components'

const Home = () => (
    <MyDiv>
        <AuthorImg>
            <img src={require(`../images/author-2.jpg`)} alt="Author"/>
        </AuthorImg>
        <Container>
            <div className="site-mast-right">
                <ImgLogo src={require(`../images/logo.png`)} alt="logo"/>
            </div>
            <p style={{ color: `#000000`, fontFamily: `Dancing Script`, cursive: `true`, fontSize: `1.5em`, marginLeft: `300px` }}>By Helly Dayana</p>
        </Container>
    </MyDiv>
)


const MyDiv = styled.div`
    width: auto;
    margin: 0;
    background: #f6f2ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 35vh;
  width: 80vh;
`
const AuthorImg = styled.figure`
  margin-top: 75px;
  margin-bottom: 75px;
  img{
      border-radius: 50%;
      border: 15px solid #fff;
      box-shadow: -14.142px -14.142px 40px 0px rgb( 255, 255, 255 );
  }
  div{
      border-radius: 50%;
      background-color: rgb( 255, 255, 255 );
  }

  @media (max-width: 767px) {    
      img {
        width: 250px;    
      }          
  }
`

const ImgLogo = styled.img`
  width: 500px;
  height: auto;

  @media (max-width: 767px) {
        width: 250px;    
  }
`

export default Home
