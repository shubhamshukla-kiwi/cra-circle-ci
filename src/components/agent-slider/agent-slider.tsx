import React, { Component } from 'react';
import styled from "styled-components"
import { Col, Row } from "react-styled-flexboxgrid"
import Slider from "react-slick";
import placeholder from './../../assets/images/homepage/review-placeholder.png'
import AgentYellowBg from './../../assets/images/homepage/bg-agent-image.png'
import AgentGreenBg from './../../assets/images/homepage/bg-agent-image-green.png'
import ButtonRed from './../../assets/images/homepage/btn-red.png'
import ButtonGreen from './../../assets/images/homepage/btn-green.png'
import AgentConnectBg from './../../assets/images/homepage/bg-agent-image-connect.png'
import Modal from 'react-modal';


Modal.setAppElement('#root');
class AgentSlider extends Component {
  constructor() {
    super();
    this.state = {
      showConnectModal: false,
      showFeedbackModal: false,
      showProfileModal: false,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 30003,
        arrows: false,

        responsive: [
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      }
    };

    this.handleConnectOpenModal = this.handleConnectOpenModal.bind(this);
    this.handleConnectCloseModal = this.handleConnectCloseModal.bind(this);
    this.handleFeedbackOpenModal = this.handleFeedbackOpenModal.bind(this);
    this.handleFeedbackCloseModal = this.handleFeedbackCloseModal.bind(this);
    this.handleProfileOpenModal = this.handleProfileOpenModal.bind(this);
    this.handleProfileCloseModal = this.handleProfileCloseModal.bind(this);
  }
  handleConnectOpenModal() {
    this.setState({ showConnectModal: true });
  }
  handleConnectCloseModal() {
    this.setState({ showConnectModal: false });
  }
  handleFeedbackOpenModal() {
    this.setState({ showFeedbackModal: true });
  }
  handleFeedbackCloseModal() {
    this.setState({ showFeedbackModal: false });
  }
  handleProfileOpenModal() {
    this.setState({ showProfileModal: true });
  }
  handleProfileCloseModal() {
    this.setState({ showProfileModal: false });
  }
  render() {

    return (
      <AgentSliderWrapper>
        <Container className="inner-container">
          <Row center="xs">
            <Col xs={12}>
              <Slider {...this.state.settings}>
                <AgentSliderItem>
                  <AgentSliderItemInner>
                    <AgentSliderImage onClick={this.handleProfileOpenModal}>
                      <Image src={AgentYellowBg} alt="bg" className="agent-bg"></Image>
                      {/* <Image src={AgentGreenBg} alt="bg" className="agent-bg"></Image> */}
                      <Image src={placeholder} alt="user" className="user-image"></Image>
                      <Image src={placeholder} alt="user" className="user-icon"></Image>
                    </AgentSliderImage>
                    <AgentSliderStars>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon"></span>
                      <span class="icon-stars font-icon"></span>
                    </AgentSliderStars>
                    <Author>
                      <AuthorDetail>
                        <AuthorName>Augustus Edwards</AuthorName>
                        <AuthorCity>Portland  —  Nationwide</AuthorCity>
                      </AuthorDetail>
                    </Author>
                    <AgentSliderContent>
                      Enthusiastic about helping people find the best quote. Entrepreneur. Passionate…
                                        </AgentSliderContent>
                    <AgentLink>
                      <a >
                        $599.00/mo
                                              <span class="icon-forward-arrow font-icon"></span>
                      </a>
                    </AgentLink>
                    <ButtonButton>
                      <div className="button-space">
                        <a className="button">
                          <Image src={ButtonRed} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Not Interested</span>
                      </div>
                      <div className="button-space" onClick={this.handleConnectOpenModal}>
                        <a className="button">
                          <Image src={ButtonGreen} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Connect</span>
                      </div>
                    </ButtonButton>
                    <ConnectedContainer className="d-none">{/* remove "d-none" when you need to show Button */}
                      <TextConnected>You are connected</TextConnected>
                      <Link>Mode of communication: Call <a title="edit">Edit</a></Link>
                      <FeedbackContainer>
                        <FeedbackText>Give Feedback</FeedbackText>
                        <AgentSliderStars>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                        </AgentSliderStars>
                      </FeedbackContainer>
                    </ConnectedContainer>
                  </AgentSliderItemInner>
                </AgentSliderItem>

                <AgentSliderItem>
                  <AgentSliderItemInner>
                    <AgentSliderImage>
                      {/* <Image src={AgentYellowBg} alt="bg" className="agent-bg"></Image> */}
                      <Image src={AgentGreenBg} alt="bg" className="agent-bg"></Image>
                      <Image src={placeholder} alt="user" className="user-image"></Image>
                      <Image src={placeholder} alt="user" className="user-icon"></Image>
                    </AgentSliderImage>
                    <AgentSliderStars>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon"></span>
                      <span class="icon-stars font-icon"></span>
                    </AgentSliderStars>
                    <Author>
                      <AuthorDetail>
                        <AuthorName>Augustus Edwards</AuthorName>
                        <AuthorCity>Portland  —  Nationwide</AuthorCity>
                      </AuthorDetail>
                    </Author>
                    <AgentSliderContent>
                      Enthusiastic about helping people find the best quote. Entrepreneur. Passionate…
                    </AgentSliderContent>
                    <AgentLink>
                      <a>
                        $599.00/mo
                      <span class="icon-forward-arrow font-icon"></span>
                      </a>
                    </AgentLink>
                    <ButtonButton className="d-none">{/* remove "d-none" when you need to show Button */}
                      <div className="button-space">
                        <a className="button">
                          <Image src={ButtonRed} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Not Interested</span>
                      </div>
                      <div className="button-space" onClick={this.handleConnectOpenModal}>
                        <a className="button">
                          <Image src={ButtonGreen} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Connect</span>
                      </div>
                    </ButtonButton>
                    <ConnectedContainer>
                      <TextConnected>You are connected</TextConnected>
                      <Link>Mode of communication: Call <a title="edit">Edit</a></Link>
                      <FeedbackContainer onClick={this.handleFeedbackOpenModal}>
                        <FeedbackText>Give Feedback</FeedbackText>
                        <AgentSliderStars>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                        </AgentSliderStars>
                      </FeedbackContainer>
                    </ConnectedContainer>
                  </AgentSliderItemInner>
                </AgentSliderItem>
                <AgentSliderItem>
                  <AgentSliderItemInner>
                    <AgentSliderImage>
                      {/* <Image src={AgentYellowBg} alt="bg" className="agent-bg"></Image> */}
                      <Image src={AgentGreenBg} alt="bg" className="agent-bg"></Image>
                      <Image src={placeholder} alt="user" className="user-image"></Image>
                      <Image src={placeholder} alt="user" className="user-icon"></Image>
                    </AgentSliderImage>
                    <AgentSliderStars>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon"></span>
                      <span class="icon-stars font-icon"></span>
                    </AgentSliderStars>
                    <Author>
                      <AuthorDetail>
                        <AuthorName>Augustus Edwards</AuthorName>
                        <AuthorCity>Portland  —  Nationwide</AuthorCity>
                      </AuthorDetail>
                    </Author>
                    <AgentSliderContent>
                      Enthusiastic about helping people find the best quote. Entrepreneur. Passionate…
                                        </AgentSliderContent>
                    <AgentLink>
                      <a>
                        $599.00/mo
                                                <span class="icon-forward-arrow font-icon"></span>
                      </a>
                    </AgentLink>
                    <ButtonButton>
                      <div className="button-space">
                        <a className="button">
                          <Image src={ButtonRed} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Not Interested</span>
                      </div>
                      <div className="button-space" onClick={this.handleConnectOpenModal}>
                        <a className="button">
                          <Image src={ButtonGreen} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Connect</span>
                      </div>
                    </ButtonButton>
                    <ConnectedContainer className="d-none">{/* remove "d-none" when you need to show Button */}
                      <TextConnected>You are connected</TextConnected>
                      <Link>Mode of communication: Call <a title="edit">Edit</a></Link>
                      <FeedbackContainer>
                        <FeedbackText>Give Feedback</FeedbackText>
                        <AgentSliderStars>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                        </AgentSliderStars>
                      </FeedbackContainer>
                    </ConnectedContainer>
                  </AgentSliderItemInner>
                </AgentSliderItem>
                <AgentSliderItem>
                  <AgentSliderItemInner>
                    <AgentSliderImage>
                      <Image src={AgentYellowBg} alt="bg" className="agent-bg"></Image>
                      {/* <Image src={AgentGreenBg} alt="bg" className="agent-bg"></Image> */}
                      <Image src={placeholder} alt="user" className="user-image"></Image>
                      <Image src={placeholder} alt="user" className="user-icon"></Image>
                    </AgentSliderImage>
                    <AgentSliderStars>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon"></span>
                      <span class="icon-stars font-icon"></span>
                    </AgentSliderStars>
                    <Author>
                      <AuthorDetail>
                        <AuthorName>Augustus Edwards</AuthorName>
                        <AuthorCity>Portland  —  Nationwide</AuthorCity>
                      </AuthorDetail>
                    </Author>
                    <AgentSliderContent>
                      Enthusiastic about helping people find the best quote. Entrepreneur. Passionate…
                                        </AgentSliderContent>
                    <AgentLink>
                      <a>
                        $599.00/mo
                                            <span class="icon-forward-arrow font-icon"></span>
                      </a>
                    </AgentLink>
                    <ButtonButton className="d-none">{/* remove "d-none" when you need to show Button */}
                      <div className="button-space">
                        <a className="button">
                          <Image src={ButtonRed} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Not Interested</span>
                      </div>
                      <div className="button-space" onClick={this.handleConnectOpenModal}>
                        <a className="button">
                          <Image src={ButtonGreen} className="button-image" alt="bg"></Image>
                        </a>
                        <span>Connect</span>
                      </div>
                    </ButtonButton>
                    <ConnectedContainer>
                      <TextConnected>You are connected</TextConnected>
                      <Link>Mode of communication: Call <a title="edit">Edit</a></Link>
                      <FeedbackContainer>
                        <FeedbackText>Give Feedback</FeedbackText>
                        <AgentSliderStars>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                          <span class="icon-stars font-icon"></span>
                        </AgentSliderStars>
                      </FeedbackContainer>
                    </ConnectedContainer>
                  </AgentSliderItemInner>
                </AgentSliderItem>

              </Slider>
            </Col>
          </Row>
        </Container>
        <Modal
          isOpen={this.state.showConnectModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleConnectCloseModal}
          shouldCloseOnOverlayClick={false}
          className="connect-modal"
        >
          {/* Connect Modal */}
          <ModalBody>
            <AgentSliderImage className="small">
              <Image src={AgentConnectBg} alt="bg" className="agent-bg"></Image>
              <Image src={placeholder} alt="user" className="user-image"></Image>
              <Image src={placeholder} alt="user" className="user-icon"></Image>
            </AgentSliderImage>
            <div className="connected-text">Great! You are now connected</div>
            <div className="connected-detail">Please select your prefered method for communication.</div>
            <CheckboxSpace>
              <div class="form-group custom-radio-btn">
                <input type="radio" id="email" name="radio-group" />
                <label for="email">Email</label>
              </div>
              <div class="form-group custom-radio-btn">
                <input type="radio" id="call" name="radio-group" checked />
                <label for="call">Call</label>
              </div>
              <div class="form-group custom-radio-btn">
                <input type="radio" id="message" name="radio-group" />
                <label for="message">Message</label>
              </div>
            </CheckboxSpace>
            <form type="submit" className="connect-form">
              {/* call section */}
              <div className="call-section">
                <div className="form-group">
                  <label>Enter your phone number and mention a suitable slot when our agent can call you.</label>
                  <input type="text" className="form-control" placeholder="Phone number" />
                </div>
                <div className="custom-radio-container">
                  <div class="form-group custom-radio-btn">
                    <input type="radio" id="slot1" name="radio-group" checked />
                    <label for="slot1">08:00-11:00 am</label>
                  </div>
                  <div class="form-group custom-radio-btn">
                    <input type="radio" id="slot2" name="radio-group" />
                    <label for="slot2">11:00-02:00 pm</label>
                  </div>
                  <div class="form-group custom-radio-btn">
                    <input type="radio" id="slot3" name="radio-group" />
                    <label for="slot3">02:00-05:00 pm</label>
                  </div>
                </div>
              </div>
              {/* end call section */}
              {/* email section */}
              <div className="email-section d-none">
                <div className="form-group">
                  <label>Please enter your email address and Augustus will get back to you very soon.</label>
                  <input type="text" className="form-control" placeholder="Email address" />
                </div>
              </div>
              {/* end Email section */}
              <button className="btn-submit">Submit</button>
            </form>
          </ModalBody>
          <button className="close-icon" onClick={this.handleConnectCloseModal}><span class="icon-cross"><span class="path2"></span></span></button>
        </Modal>
        {/* End Connect Modal */}
        {/* rate and review Modal */}
        <Modal
          isOpen={this.state.showFeedbackModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleFeedbackCloseModal}
          shouldCloseOnOverlayClick={false}
          className="review-modal"
        >
          <ModalBody>
            <div className="review-heading">rate and review</div>
            <div className="review-detail">Please review your overall experience with us.</div>
            <form type="submit" className="connect-form">
              <div className="user-section">
                <Image src={placeholder} alt="user" className="user-image"></Image>
                <div className="user-detail">
                  <div className="user-heading">How would you rate your agent?</div>
                  <div className="star-section">
                    <span class="icon-stars font-icon active"></span>
                    <span class="icon-stars font-icon"></span>
                    <span class="icon-stars font-icon"></span>
                    <span class="icon-stars font-icon"></span>
                    <span class="icon-stars font-icon"></span>
                  </div>
                </div>
              </div>
              <div className="radio-heading">Rate your experience on seekr</div>
              <div className="custom-radio-container">
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate1" name="radio-group" />
                  <label for="rate1">1</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate2" name="radio-group" />
                  <label for="rate2">2</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate3" name="radio-group" />
                  <label for="rate3">3</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate4" name="radio-group" />
                  <label for="rate4">4</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate5" name="radio-group" />
                  <label for="rate5">5</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate6" name="radio-group" />
                  <label for="rate6">6</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate7" name="radio-group" />
                  <label for="rate7">7</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate8" name="radio-group" />
                  <label for="rate8">8</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate9" name="radio-group" />
                  <label for="rate9">9</label>
                </div>
                <div class="form-group custom-radio-btn">
                  <input type="radio" id="rate10" name="radio-group" />
                  <label for="rate10">10</label>
                </div>
              </div>
              <div className="comment-section">
                <div className="form-group">
                  <textarea className="form-control" placeholder="Any comments? (Optional)" />
                </div>
              </div>
              <button className="btn-submit">Submit Feedback</button>
              <button className="close-icon" onClick={this.handleFeedbackCloseModal}><span class="icon-cross"><span class="path2"></span></span></button>
            </form>

          </ModalBody>
        </Modal>
        {/* End rate and review Modal */}

        {/* profile */}
        <Modal
          isOpen={this.state.showProfileModal}
          contentLabel="onRequestClose"
          onRequestClose={this.handleProfileCloseModal}
          shouldCloseOnOverlayClick={false}
          className="profile-modal"
        >
          <ModalBody>
            <form>
          <AgentSliderItem>
                  <AgentSliderItemInner>
                    <a className="action-txt">Not Interested</a>
                    <AgentSliderImage onClick={this.handleProfileOpenModal}>
                      <Image src={AgentYellowBg} alt="bg" className="agent-bg"></Image>
                      {/* <Image src={AgentGreenBg} alt="bg" className="agent-bg"></Image> */}
                      <Image src={placeholder} alt="user" className="user-image"></Image>
                      <Image src={placeholder} alt="user" className="user-icon"></Image>
                    </AgentSliderImage>
                    <AgentSliderStars>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon active"></span>
                      <span class="icon-stars font-icon"></span>
                      <span class="icon-stars font-icon"></span>
                    </AgentSliderStars>
                    <Author>
                      <AuthorDetail>
                        <AuthorName>Augustus Edwards</AuthorName>
                        <AuthorCity>Portland  —  Nationwide</AuthorCity>
                      </AuthorDetail>
                    </Author>
                    <AgentSliderContent className="p-txt">
                    A Passionate hiker, loves to swim and dance. 
                    Enthusiastic about helping people find the best quote. Loves reading Books. Sarcastic humor.
                    </AgentSliderContent>
                    <div className="profile-footer">
                    <AgentLink>
                      <a>
                        $599.00/mo
                      </a>
                      <span>Ciblus Insurance</span>
                    </AgentLink>
                    <ButtonButton>
                      <div className="button-space" onClick={this.handleConnectOpenModal}>
                        <span>Connect</span>
                      </div>
                    </ButtonButton>
                    </div>
                  </AgentSliderItemInner>
                </AgentSliderItem>
              <button className="close-icon" onClick={this.handleProfileCloseModal}><span class="icon-cross"><span class="path2"></span></span></button>
            </form>

          </ModalBody>
        </Modal>
        {/* End profile */}
      </AgentSliderWrapper>

    )
  }
}

const Container = styled.div`
`
const AgentSliderWrapper = styled.div`
  width: calc(100% + 77px);
  margin-right: -77px;
`
const AgentSliderItem = styled.div`
  padding-right: 25px;
  @media only screen and (max-width: 786px) {
    padding-right: 0px;
  }
`
const AgentSliderItemInner = styled.div`
  min-height: 484px;
  padding: 19px 24px 25px;
  border-radius: 10px;
  box-shadow: 0 32px 34px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  text-align: center;
`
const AgentSliderImage = styled.div`
  width: 202px;
  height: 192px;
  margin: 0 auto 6px;
  .agent-bg{
    height: 192px;
    width: 189px;
    margin: 0px auto;
    @media only screen and (max-width: 768px) {
      height: 155px;
      width: 155px;
    }
  }
  .user-image{
    width: 168px;
    height: 169px;
    border: 5px solid #FFF;
    position: absolute;
    top: 6px;
    left: 13px;
    border-radius: 50%;
    @media only screen and (max-width: 768px) {
      width: 125px;
      height: 125px;
      top: 11px;
      left: 35px;
    }
  }
  .user-icon{
    height: 57px;
    width: 57px;
    position: absolute;
    bottom: 7px;
    right: 13px;
    @media only screen and (max-width: 768px) {
    height: 45px;
    width: 45px;
    position: absolute;
    bottom: 43px;
    right: 29px;
    }
  }
  &.small{
    width: 145px;
    height: 156px;
    margin-bottom: 5px;
    .agent-bg{
      width: 145px;
      height: 156px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .user-image{
      width: 113px;
      height: 113px;
      border: 3px solid #FFF;
      position: absolute;
      top: 14px;
      left: 14px;
      border-radius: 50%;
    }
    .user-icon{
      height: 38px;
      width: 38px;
      position: absolute;
      bottom: 22px;
      right: 12px;
    }
  }
`
const AgentLink = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  a{
    color: #252525;
  }
  span{
    font-size: 11px;
    display: inline-block;
    margin-left: 7px;
  }
`
const ButtonButton = styled.div`
  width: 100%;
  padding-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.d-none{
    display: none;
  }
  .button-space{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 14px;
    span{
      font-size: 14px;
      font-weight: 300;
      color: #252525;
      text-align: center;
    }
  }
  .button{
    margin-bottom: 3px
  }
  .button-image {
    height: 50px;
    width: 50px
  }
`
const AgentSliderStars = styled.div`
font-size: 14px;
text-align: center;
margin-bottom: 8px;
.icon-stars{
   color: #bdbdbd;
   display: inline-block;
   margin: 0 3px 0 0;
   &.active{
    color: #ffdc64;
   }
 }
`
const AgentSliderContent = styled.div`
  font-size: 14px;
  color: #252525;
  margin-bottom: 12px;
@media only screen and (max-width: 786px) {
      padding: 0px 20px;
  }
`
const Author = styled.div`
 display: flex;
 justify-content: center;
 @media only screen and (max-width: 786px) {
      justify-content: center;
  }
`
const AuthorDetail = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin-bottom: 10px;
 @media only screen and (max-width: 786px) {
      margin-bottom: 30px;
  }
`
const AuthorName = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #252525;
  text-transform: uppercase;
`
const AuthorCity = styled.div`
  font-size: 14px;
  color: #252525;
`
const Image = styled.img`
 
`
const ConnectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -5px;
  &.d-none{
    display: none;
  }
`
const TextConnected = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #23a54b;
  margin-bottom: 3px;
`
const Link = styled.div`
  font-size: 14px;
  line-height: 1.29;
  color: #252525;
  margin-bottom: 14px;
  a{
    font-weight: 600;
    color: #486cfd;
    text-decoration: underline;
  }
`
const FeedbackContainer = styled.div`
  display: flex;
  align-item: center;
  width: 100%;
  max-width: 212px;
  height: 35px;
  margin: 0 auto;
  padding: 8px 0 9px;
  justify-content: center;
  border-radius: 2px;
  background-color: rgba(14, 172, 78, 0.1);
`
const FeedbackText = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  color: #252525;
  margin-right: 8px;
`
const ModalBody = styled.div`
  padding: 37px 41px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.d-none{
    display: none;
  }
  .connected-text{
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    color: #23a54b;
    margin-bottom: 6px;
    text-transform: uppercase;
  }
  .connected-detail{
    font-size: 14px;
    line-height: 1.29;
    color: #252525;
    margin-bottom: 29px;
  }
`
const CheckboxSpace = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    label{
      padding-left: 33px !important;
      line-height: 28px !important;
      @media only screen and (max-width: 786px) {
       margin-right: 20px!important;
    }
    }
`

export default AgentSlider;
