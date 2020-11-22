import React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
    height: 50%;
    width: auto;
    margin: 0;
    background: #f6f2ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
`
const Home = () => (
    <MyDiv>
        <AuthorImg>
            <img src={require(`../images/author-2.jpg`)} alt="Author"/>
        </AuthorImg>
        <Container>
            <div className="site-mast-right">
                <img style={{ width: `500px`, height: `175px` }} src={require(`../images/logo.png`)} alt="logo"/>
            </div>
            <p style={{ color: `#000000`, fontFamily: `Dancing Script`, cursive: `true`, fontSize: `1.5em`, marginLeft: `300px` }}>By Helly Dayana</p>
            <p style={{ color: `#000000`, fontFamily: `Kumbh Sans`, fontSize: `1.2em`, }}>
                A full portfolio site its been develop, in the mean time please check out my social networks and my photos <a href="https://picti.net/WSjiC" target="_blank" rel="noopener noreferrer" style={{ color: `#B75CDE` }}>HERE</a>
            </p>
            <div className="site-mast-right">
                <a href="https://www.instagram.com/mysourceoflove/" target="_blank" rel="noopener noreferrer"><img style={{ width: `75px`, height: `75px` }} src={require(`../images/instagram.svg`)} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/mysourceoflove/" target="_blank" rel="noopener noreferrer"><img style={{ width: `75px`, height: `75px`, marginLeft: `15px` }} src={require(`../images/facebook.svg`)} alt="Facebook" />
                </a>
                <a href="https://twitter.com/hellyydaya" target="_blank" rel="noopener noreferrer"><img style={{ width: `75px`, height: `75px`, marginLeft: `15px` }} src={require(`../images/twitter.svg`)} alt="Twitter" />
                </a>
                <a href="https://www.youtube.com/channel/UCQK5tCDg6zGWBsmaEn1Gu7Q" target="_blank" rel="noopener noreferrer"><img style={{ width: `75px`, height: `75px`, marginLeft: `15px` }} src={require(`../images/youtube.svg`)} alt="Youtube" />
                </a>
                <a href="mailto: HellyDayana@sourceoflove.com"><img style={{ width: `75px`, height: `75px`, marginLeft: `15px` }} src={require(`../images/envelope.svg`)} alt="Email" /></a>
            </div>
        </Container>
    </MyDiv>
)

export default Home
