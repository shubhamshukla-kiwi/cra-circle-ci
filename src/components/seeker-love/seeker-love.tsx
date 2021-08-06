import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import premiums from './../../assets/images/homepage/matchmaking.svg'
import superquick from './../../assets/images/homepage/control.svg'
import hassle from './../../assets/images/homepage/quality.svg'

const SeekerLove = () => {

    return (
      <div className="seeker-love-wrap">
        <Container className="inner-container">
            <Row xs="center">
                <Col md={12} xs={12} className="seeker-love-content">
                    <h2>Here’s why you’ll love Seekr</h2>
                    {/* <p>We are proud to work and are inspired by their support in helping children. We are grateful for their help in our mission to create lasting, positive change.</p> */}
                </Col>
                <Col xs={12} md={12}>
                    <Row xs="center">
                        <Col xs={12} sm={4} md={4}>
                            <SeekerInfo>
                                <SeekerLegend><img src={premiums} alt="icon"></img></SeekerLegend>
                                <SeekerTitle>Matchmaking Services</SeekerTitle>
                                <SeekerText>Seekr is a relationship creator, using our proprietary algorithm we 
                                    help find you personalized insurance quotes based on your selected preferences. 
                                    You select the agent and quote that is most attractive to your needs. With Seekr you 
                                    choose the agent you want to connect with, while we protect your information from the ones 
                                    you don’t.
                                </SeekerText>
                            </SeekerInfo>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <SeekerInfo>
                                <SeekerLegend><img src={superquick} alt="icon"></img></SeekerLegend>
                                <SeekerTitle>Total Quote Control (TQC)</SeekerTitle>
                                <SeekerText>At Seekr it’s all about control. Unlike other online insurance 
                                    comparison sites, Seekr puts ALL the power in your hands. You decide on the quote you want 
                                    and when to connect with an agent. With our Total Quote Control (TQC), you manage how/when 
                                    your information is shared with only the agent you selected. Unlike other sites, there are 
                                    no obligations and no cost, enabling you to explore all your options, in one place, saving 
                                    time and money.</SeekerText>

                            </SeekerInfo>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <SeekerInfo>
                                <SeekerLegend><img src={hassle} alt="icon"></img></SeekerLegend>
                                <SeekerTitle>Quote Quality</SeekerTitle>
                                <SeekerText>When you use other online insurance comparison sites you get fast, 
                                    mediocre, inaccurate quotes churned out by robots. At Seekr, we only provide 
                                    high quality quotes from real local agents representing top tier insurance companies that you 
                                    know and trust. Don’t waste your time dealing with robots, 
                                    use Seekr to match with a real local agent today.</SeekerText>

                            </SeekerInfo>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

const Container = styled.div`

`

const SeekerInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media only screen and (max-width: ${({ theme: { media } }) =>
media.mobile_landscape}) {
      margin-bottom: 40px;
  }

`

const SeekerLegend = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: 'Macho Regular';
  font-size: 18px;
  margin: 0;
  text-transform: uppercase;
  height: 65px;
  @media only screen and (max-width: ${({ theme: { media } }) =>
        media.tablet_landscape}) {
    
  }
  img{
      width: 65px;
  }
`

const SeekerTitle = styled.h2`
  color: #1e2831;
  font-family: 'Macho-Semi'!important;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.85;
  margin-bottom: 10px;
  margin-top: 14px;

  @media only screen and (max-width: ${({ theme: { media } }) =>
        media.tablet_landscape}) {
    
  }
`

const SeekerText = styled.p`
  color: #000;
  font-family: 'Macho Regular';
  font-size: 16px;
  line-height: 23px;
  font-weight: normal;;
  margin: 0;
  color: #40596e;
  @media only screen and (max-width: ${({ theme: { media } }) =>
        media.tablet_landscape}) {
  }
`

export default SeekerLove;
