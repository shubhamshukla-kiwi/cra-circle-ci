import React, { useState } from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import howWorks from './../../assets/images/homepage/how-works.png'
import seekrBlue from './../../assets/images/homepage/seekr-blue.png'
import preference from './../../assets/images/homepage/preference.jpg'
import vehicle from './../../assets/images/homepage/vehicle.png'
import quotes from './../../assets/images/homepage/quotes.jpg'
import driver from './../../assets/images/homepage/driver.jpg'
import InputMask from 'react-input-mask'


const SeekerWork = () => {
  const [zipcode, setZipcode] = useState(97);
  return (
    <div className="how-works-wrapper">
      <Container className="inner-container">
        <Row center="xs">
          <Col xs={12} sm={6} className="how-works-left">
            <WorkInfo>
              <WorkTitle>How it works</WorkTitle>
              <WorkText>Control every step of the matchmaking process to find the right insurance specifically for you, in just three (3) easy steps.</WorkText>
            </WorkInfo>
            <div className="listing-wrap">
              <List>
                <ListItem>
                  <Icon src={preference}></Icon>
                  <ListDetails>
                    <ListTitle>Preferences</ListTitle>
                    <ListContent>Rank the preferences that mean the most to you.</ListContent>
                  </ListDetails>
                </ListItem>
                <ListItem>
                  <Icon src={driver}></Icon>
                  <ListDetails>
                    <ListTitle>Enter Driver Details</ListTitle>
                    <ListContent>Input the required details about you and your driving history.</ListContent>
                  </ListDetails>
                </ListItem>
                <ListItem>
                  <Icon src={vehicle}></Icon>
                  <ListDetails>
                    <ListTitle>Enter Vehicle Details</ListTitle>
                    <ListContent>Add details of as many cars as you want to the quote to find the best coverage.</ListContent>
                  </ListDetails>
                </ListItem>
                <ListItem>
                  <Icon src={quotes}></Icon>
                  <ListDetails>
                    <ListTitle>Get your Quotes</ListTitle>
                    <ListContent>Sit back and wait, while we do the heavy lifting to get quotes from real, local, insurances agents.</ListContent>
                  </ListDetails>
                </ListItem>
              </List>
            </div>
          </Col>
          <Col xs={12} sm={6} className="how-works-right">
            <Image src={howWorks} />
            <div className="quotes-details">
              <img src={seekrBlue} alt="logo"></img>
              <h5>Accurate insurance quotes without the spam.</h5>
              <Form>
                <FieldGroup>
                  <span className="icon-location font-icon"></span>
                  <InputMask mask="99999" onChange={e => setZipcode(e.target.value)}>
                    {(inputProps) => <HeroField type="text" placeholder="Enter Zip Code" {...inputProps} />}
                  </InputMask>
                </FieldGroup>
                <HeroButton type="submit">
                  Get Started
                </HeroButton>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Image = styled.img`
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
   
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
   
  }
`

const Container = styled.div`
 .how-works-left, .how-works-right{
  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    width: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
 }
.how-works-right{
  & > img{
    @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      display: none;
    }
  }
}
`

const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const List = styled.div`
 position: relative;
 
`
const ListItem = styled.div`
  display: flex;
  margin-bottom: 36px;
  
`
const ListTitle = styled.div`
font-size: 18px;
font-weight: 600;
color: #1e2831;
line-height: 1.5;
font-family: 'Macho-Semi'!important;
margin-bottom: 3px;
@media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    font-size: 16px;
  }
`
const ListContent = styled.div`
font-size: 16px;
font-weight: normal;
color: #40596e;
line-height: 1.44;
@media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    font-size: 14px;
    line-height: 1.57;
  }
`
const Icon = styled.img`
 width: 46px;
 height: 46px;
`
const ListDetails = styled.div`
 width: calc(100% - 40px);
 margin-left: 15px;

`
const WorkTitle = styled.h2`
  color: #000;
  font-family: 'Macho-Medium';
  font-weight: 600;
  font-size: 36px;
  line-height: 89.69%;
  letter-spacing: -0.03em;
  margin: 0;
  margin-bottom: 42px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    text-align: center;
    font-size: 28px;
    line-height: 1.32;
  }
`

const WorkText = styled.p`
  color: #000;
  font-family: 'Macho Regular';
  font-size: 21px;
  font-weight: normal;
  line-height: 100%;
  letter-spacing: -0.06em;
  margin: 0;
  margin-bottom: 42px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      font-size: 14px;
      text-align: center;
      padding: 0px 20px;
      line-height: 1.57;
  }
`
const FieldIcon = styled.img`
  height: ${props => props.height}px;
  left: 15px;  
  position: absolute;
  top: 14px;
  width: ${props => props.width}px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      
  }
`
const FieldGroup = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  min-width: 277px;
  height: 48px;
  border-radius: 1.8px;
  border: 1px solid #e1e1e1;
  margin-right: 13px;
  background-color: white;
  
  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      min-width: 100%;
      margin-right: 0px;
  }
`
const ZipContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 19.5px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
  
  }
`
const HeroButton = styled.button`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  box-sizing: border-box;
  color: #252525;
  cursor: pointer;
  display: flex;
  border: 0;
  font-family: 'Macho Medium';
  font-size: 15px;
  font-weight: 600;
  position: relative;
  text-transform: capitalize;
    width: 100%;
    height: 48px;
    justify-content: center;
    border-radius: 1.8px;
    margin-top: 14px;

  img {
    margin: 0;
  }

  ::focus {
    border: none;
    outline: 0;
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
   
  }
`
const HeroField = styled.input`
  background-color: transparent;
  border: 0px;
  box-sizing: border-box;
  color: #808080;
  font-family: 'Macho Regular';
  font-size: 13px;
  font-weight: 500;
  outline-width: 0;
  padding-left: 10px;

  ::placeholder {
    color: #808080;
  }

  ::focus, :active {
    border: none;
    outline: none;
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    
  }
`
export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export default SeekerWork;
