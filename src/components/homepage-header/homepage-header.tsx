import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import seekrLogo from './../../assets/images/homepage/seekr-logo-blue.png'
import hamburger from './../../assets/images/homepage/hamburger.svg'
import { Link } from 'react-router-dom';

const HomepageHeader = () => {
  const [show, setShow] = React.useState();
  return (
    <div className={show ? "show header-wrap" : "header-wrap"}>
      <Container className="inner-container">
        <Row xs="center">
          <Col xs={4} md={6}>
            <Image src={hamburger} alt="hamburger" className="hamburger-icon" onClick={() => setShow(!show)} />
            <Image src={seekrLogo} alt="logo" />
          </Col>
          <Col xs={8} md={6}>
            <HeaderList className="top-header">
              <List>
                Support
              </List>
              <List>
                Who we are
              </List>
              <List className="login-btn">
                <Link className="button-transparent" to="/dashboard">Login</Link>
              </List>
            </HeaderList>
          </Col>
        </Row>
        <Row className="sidemenu-wrap"> 
        <span className="icon-cross font-icon" onClick={() => setShow(false)}>
            <span className="path2 font-icon"></span>
          </span>
          <HeaderList>
        
            <List>
              Support
              </List>
            <List>
              Who we are
              </List>
          </HeaderList>
        </Row>
      </Container>
    </div>
  )
}

const Image = styled.img`
  height: 100%;
`

const Container = styled.div`
`


const HeaderList = styled.div`
 display: flex;
 align-items: center;
 margin-left: auto;
`
const List = styled.div`
font-size: 13px;
color: #595959;
margin-left: 50px;
cursor: pointer;
text-transform: Uppercase;
font-family: 'Macho-Medium'!important;
`
export default HomepageHeader;
