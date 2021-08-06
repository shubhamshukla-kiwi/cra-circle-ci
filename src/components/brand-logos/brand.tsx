import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import Slider from "react-slick";
import progressive from './../../assets/images/homepage/progressive.png'
import insurance from './../../assets/images/homepage/insurance.png'
import farmers from './../../assets/images/homepage/farmers.png'
import statefarm from './../../assets/images/homepage/statefarm.png'
import nationwide from './../../assets/images/homepage/nationwide.png'

const BrandLogo = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <div className="brand-wrapper">
      <Container className="inner-container">
      <Row center="xs">
          <Col xs={12}>
            <h4>Insurance from the top tier insurance companies, for the BEST overall coverage.</h4>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <Slider {...settings}>
              <HeroBrands>
                <HeroBrandsImage src={progressive} alt="brand-logos" />
              </HeroBrands>
              <HeroBrands>
                <HeroBrandsImage src={insurance} alt="brand-logos" />
              </HeroBrands>
              <HeroBrands>
                <HeroBrandsImage src={farmers} alt="brand-logos" />
              </HeroBrands>
              <HeroBrands>
                <HeroBrandsImage src={statefarm} alt="brand-logos" />
              </HeroBrands>
              <HeroBrands>
                <HeroBrandsImage src={nationwide} alt="brand-logos" />
              </HeroBrands>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Container = styled.div`
`
const HeroBrands = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  // height: 162px;
    justify-content: center;
  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
  
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
  
  }
`

const HeroBrandsImage = styled.img`
margin-right: 55px;
  &:last-child{
    margin-right: 0px;
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.tablet_landscape}) {
    
  }

  @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
    
  }
`;



export default BrandLogo;
