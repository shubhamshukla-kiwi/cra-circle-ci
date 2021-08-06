import React, { useState } from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import InputMask from 'react-input-mask'
import phoneImg from './../../assets/images/homepage/quotes.png'


const Seek = () => {
  const [zipcode, setZipcode] = useState();
  return (
    <div className="seek-quotes-wrap">
      <Container>
        <Row xs="center">
          <Col xs={12} md={5}>
            <Image src={phoneImg} />
          </Col>
          <Col md={7} xs={12} className="seek-quotes-content">
            <SeekInfo>
              <SeekLegend>Quotes from Real Local Agents</SeekLegend>
              <SeekTitle>When you use other online insurance comparison sites you get fast, mediocre, inaccurate quotes churned out by robots.</SeekTitle>
              <SeekText>At Seekr, we only provide high quality quotes from real local agents representing top tier insurance companies that you know and trust. Don’t waste your time dealing with robots, use Seekr to match with a real local agent today.</SeekText>
            </SeekInfo>
            <Form>
              <ZipContent>
                <FieldGroup>
                  <span className="icon-location font-icon"></span>
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
      </Container>
    </div>
  )
}

const Container = styled.div`
`

const Image = styled.img`
 width: 100%;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
    
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    
  }
`

const SeekInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  
`

const SeekLegend = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: 'Macho-Semi'!important;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.03;
  margin: 0;
  margin-bottom: 25px;
color: #1e2831;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      font-size: 28px;
      line-height: 37px;
  }
`

const SeekTitle = styled.h2`
  font-family: 'Macho-Medium';
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
  line-height: 23px;
  color: #253645;
  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    margin-bottom: 16px;
  }
`

const SeekText = styled.p`
  font-family: 'Macho Regular';
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 37px;
  line-height: 23px;
  letter-spacing: normal;
  color: #40596e;

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      font-size: 16px;
      line-height: 1.57;
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
    margin-right: 0px;
    min-width: 100%;
    margin-bottom: 20px;
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
`;

export default Seek;
