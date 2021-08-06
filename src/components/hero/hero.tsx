import React, { useState } from "react"
import styled from "styled-components"
import { Col, Row } from 'react-styled-flexboxgrid'
import InputMask from 'react-input-mask'
import zipIcon from './../../assets/images/homepage/location.svg'
import heroBgImg from './../../assets/images/homepage/home-banner.png'


import Loading from '../loading2/loading'
import { setItemLocalStorage } from "../../helpers"

const Hero = (props) => {
  const [zipcode, setZipcode] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (zipcode && String(zipcode).length === 5) {
      setIsLoading(true);
      props.fetchZip(zipcode);
      setItemLocalStorage('zip', zipcode);
      props.history.push("new-car/preferences");
      setIsLoading(false);
    }
  }

  return (
    <HeroContainer>
      <Loading show={isLoading} />
      <InnerContainer className="inner-container">
        <Row center="xs">
          <Col className="heroTitle" xs={12}>
          <HeroTitle>Select, Connect, Protect</HeroTitle>
            <HeroContent>Seekr’s insurance matchmaker is the only online insurance comparison 
              site that matches you with REAL agents and quotes from the top insurance companies, 
              where YOU control every step of the search process</HeroContent>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} lg={12}>
            <HeroList>
              <HeroItem>
                <span className="icon-privacy font-icon"></span>
                <HeroItemCopy>100% Privacy</HeroItemCopy>
              </HeroItem>
              <HeroItem>
                <span className="icon-verified-agents font-icon"></span>
                <HeroItemCopy>Real Agents</HeroItemCopy>
              </HeroItem>
              <HeroItem>
                <span className="icon-control font-icon"></span>
                <HeroItemCopy>Custom Controls</HeroItemCopy>
              </HeroItem>
            </HeroList>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <Form onSubmit={handleSubmit}>
              <ZipContent>
                <FieldGroup>
                  <FieldIcon src={zipIcon} alt="zip" width={14} height={20} />
                  <InputMask mask="99999" value={zipcode} onChange={e => setZipcode(e.target.value)}>
                    {(inputProps) => <HeroField type="text" placeholder="Enter Zip Code" {...inputProps} />}
                  </InputMask>
                </FieldGroup>
                <HeroButton type="submit">
                  Get Started Now
                </HeroButton>
              </ZipContent>
            </Form>
          </Col>
        </Row>
      </InnerContainer>
    </HeroContainer>
  )
}

const InnerContainer = styled.div`
`

const HeroContainer = styled.div`
  background-image: url(${heroBgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 587px;
  max-height: 1200px;
  width: 100%;
  padding: 105px 0px 111px;
  margin-top: 78px;
`
const HeroContent = styled.div`
font-size: 18px;
  font-weight: normal;
  line-height: 27px;
  margin-top: 10px;
  color: white;
  opacity: 0.67;
  max-width: 610px;
  padding-bottom: 17px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  @media only screen and (max-width: ${({ theme: { media } }) =>
  media.mobile_landscape}) {
    font-size: 14px;
    line-height: 22px;
}
`

const HeroTitle = styled.h1`
color: white;
font-family: 'Macho-Semi';
font-size: 36px;
font-weight: 600;
line-height: 40px;
letter-spacing: normal;
margin: 0;
text-align: left;
max-width: 540px;
width: 100%;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      width: 90%;
      margin-bottom: 24px;
      font-size: 28px;
      line-height: 30px;
  }
`

const HeroList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: start;
  list-style: none;
  margin-bottom: 40px;
  padding: 0;
  margin: 31px 0px 38px;
  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      flex-wrap: wrap;
      margin: 31px 0px 15px;
  }
  p{
    font-size: 15px;
    font-weight: bold;
    opacity: 0.72;
  }
  .font-icon{
    color: white;
    margin-right: 15px;
  }
`

const HeroItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 56px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      margin-right: 0px;
      width: 100%;
      margin-bottom: 30px;
  }
`

const HeroItemLogo = styled.img`
  height: ${props => props.height}px;
  margin-right: 10px;
  width: ${props => props.width}px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    
  }
`

const HeroItemCopy = styled.p`
  color: white;
  font-family: 'Macho Regular';
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    
  }
`

const ZipContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 19.5px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    flex-wrap: wrap;
    width: 100%;
  }
`

const FieldGroup = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  min-width: 277px;
  height: 48px;
  border-radius: 1.8px;
  border: 1px solid #d8d8d8;
  margin-right: 13px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      min-width: 100%;
      margin-bottom: 15px;
      margin-right: 0px;
  }
`

const HeroField = styled.input`
  background-color: transparent;
  border: 0px;
  box-sizing: border-box;
  color: #808080;
  font-family: 'Macho-Medium'!important;
  font-size: 13px;
  font-weight: 500;
  outline-width: 0;
  padding-left: 42px;

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

const HeroButton = styled.button`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.yellow};
  box-sizing: border-box;
  color: #252525;
  cursor: pointer;
  display: flex;
  border: 0;
  font-family: 'Macho-Semi'!important;
  font-size: 15px;
  font-weight: 600;
  position: relative;
  text-transform: capitalize;
    width: 160px;
    height: 48px;
    justify-content: center;
    border-radius: 1.8px;

  img {
    margin: 0;
  }

  ::focus {
    border: none;
    outline: 0;
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      width: 100%;
  }
`

export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.black};
  flex-direction: column;
  max-width: ${props => props.width + 'px'};
  padding:23px 28px;
  background-color: #ffffff;
  max-width: 514px;
  height: 94px;
  border-radius: 5px;
  border: 1px solid #979797;
  ${props => props.width ? 'margin: 0 auto;' : ''}

  @media only screen and (max-width: ${({ theme: { media } }) =>
  media.mobile_landscape}) {
    height: auto;
  }
`;

export default Hero;
