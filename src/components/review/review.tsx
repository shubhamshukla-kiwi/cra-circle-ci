import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import Slider from "react-slick";
import placeholder from './../../assets/images/homepage/review-placeholder.png'


const Review = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30003,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <div className="review-wrapper">
      <Container className="inner-container">
        <Row center="xs">
          <Col xs={12}>
            <Slider {...settings}>
              <ReviewItem>
                <ReviewStars>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                </ReviewStars>
                <ReviewContent>
                  Very good experience. Got the settlement done in less than 24 hours.
                </ReviewContent>
                <Author>
                  <Image src={placeholder} alt="user"></Image>
                  <AuthorDetail>
                    <AuthorName>Charles Welch</AuthorName>
                    <AuthorCity>Texas, USA</AuthorCity>
                  </AuthorDetail>
                </Author>
              </ReviewItem>
              <ReviewItem>
                <ReviewStars>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                </ReviewStars>
                <ReviewContent>
                Thank you so much for the amazing service.
                </ReviewContent>
                <Author>
                  <Image src={placeholder} alt="user"></Image>
                  <AuthorDetail>
                    <AuthorName>Charles Welch</AuthorName>
                    <AuthorCity>Texas, USA</AuthorCity>
                  </AuthorDetail>
                </Author>
              </ReviewItem>
              <ReviewItem>
                <ReviewStars>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                </ReviewStars>
                <ReviewContent>
                Hassle free insurance & quick response. Absolutely best insurance company ever
                </ReviewContent>
                <Author>
                  <Image src={placeholder} alt="user"></Image>
                  <AuthorDetail>
                    <AuthorName>Charles Welch</AuthorName>
                    <AuthorCity>Texas, USA</AuthorCity>
                  </AuthorDetail>
                </Author>
              </ReviewItem>
              <ReviewItem>
                <ReviewStars>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                  <span className="icon-stars font-icon"></span>
                </ReviewStars>
                <ReviewContent>
                  Very good experience. Got the settlement done in less than 24 hours.
                </ReviewContent>
                <Author>
                  <Image src={placeholder} alt="user"></Image>
                  <AuthorDetail>
                    <AuthorName>Charles Welch</AuthorName>
                    <AuthorCity>Texas, USA</AuthorCity>
                  </AuthorDetail>
                </Author>
              </ReviewItem>

            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Container = styled.div`
`

const ReviewItem = styled.div`
 padding-right: 40px;
 @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      padding-right: 0px;
  }
`
const ReviewStars = styled.div`
 
`
const ReviewContent = styled.div`
font-size: 18px;
font-weight: 500;
line-height: 1.5;
letter-spacing: normal;
color: #ffffff;
margin: 20px 0px;

@media only screen and (max-width: ${({ theme: { media } }) =>
media.mobile_landscape}) {
      padding: 0px 20px;
  }
`
const Author = styled.div`
 display: flex;
 
 @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      justify-content: center;
  }
`
const AuthorDetail = styled.div`
 margin-left: 16px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 @media only screen and (max-width: ${({ theme: { media } }) =>
    media.mobile_landscape}) {
      margin-bottom: 70px;
  }
`
const AuthorName = styled.div`
font-size: 17px;
font-weight: 500;
color: white;
`
const AuthorCity = styled.div`
font-size: 13px;
font-weight: normal;
opacity: 0.64;
color: white;
`
const Image = styled.img`
 width: 55px;
 height: 55px;
`
export default Review;
