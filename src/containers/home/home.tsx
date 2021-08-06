// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import './new-car-start.css';

// import Rfq from '../../lib/models/quote';

// import LogoIcon from '../../components/svgs/logo-icon';
// import Form from '../../components/form/form';
// import FormButton from '../../components/form-button/form-button';
// import InputText from '../../components/input-text/input-text';

// import formConnect from '../../hocs/form-connect/form-connect';
// import { captureProspect } from '../../actions/marketing';


// import ipadImage from '../../assets/images/marketing/ipad.png';
// import smilingManImage from '../../assets/images/marketing/man-smiling.png';
// import backgroundVideo from '../../assets/images/marketing/car_background.mp4';
// import brandPinImage from '../../assets/images/marketing/brand-pin.png';
// import locationPinImage from '../../assets/images/marketing/location-pin.png';
// import pricePinImage from '../../assets/images/marketing/price-pin.png';
// import servicePinImage from '../../assets/images/marketing/service-pin.png';
// import videoIcon from '../../assets/images/video-player-icon.png';
// import marketingVideo from '../../assets/videos/Seeker-Final-Male-v4.mp4';
// import Validator from "../../lib/helpers/validator";
// import Footer from './components/Footer';
// import TopBar from './components/TopBar';
// import StartedFormCTA from './components/StartedFormCTA';

// const FormInput = formConnect(InputText);

// class NewCarStart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             videoOpen: false,
//             emailValid: true,
//         }
//     }

//     componentDidMount() {
//         if (this.video) {
//             this.video.playbackRate = 1.5;
//         }
//     }

//     onScroll = ({ nativeEvent: { target } }) => {
//         const mobile = typeof window.orientation !== 'undefined';

//         const visibleWindowHeight = target.offsetHeight;
//         const scrollY = target.scrollTop;
//         const scrollSpeed = (p) => p * p * 0.4;

//         requestAnimationFrame(() => {
//             if (!mobile) {
//                 target.querySelectorAll('.section-parallax').forEach(function (el, index, array) {
//                     const parallaxMagnitude = parseFloat(el.getAttribute('data-parallax-magnitude')) || 1;
//                     const elBottom = el.offsetTop + el.offsetHeight;
//                     if (el.offsetTop < scrollY + 50 && elBottom >= scrollY) {
//                         const pos = (scrollY - el.offsetTop) / visibleWindowHeight;
//                         const translateY = Math.round(scrollSpeed(pos * parallaxMagnitude) * visibleWindowHeight);
//                         el.style.transform = 'translateY(' + translateY + 'px)';
//                     } else if (elBottom > scrollY) {
//                         el.style.transform = 'translateY(0px)';
//                     }
//                 });
//             }

//             if (
//                 this.smartMatchingSection.getBoundingClientRect().top < visibleWindowHeight / 2 &&
//                 !this.smartMatchingSection.classList.contains('animate-pins')
//             ) {
//                 this.smartMatchingSection.classList.add('animate-pins');
//             }
//         });
//     };

//     handleScrollDownClick = (e) => {
//         e.preventDefault();
//         this.container.scrollTo({
//             top: this.section1.offsetTop,
//             behavior: 'smooth',
//         });
//     };

//     openVideo = (e) => {
//         e.preventDefault();
//         this.setState({ videoOpen: true });
//         this.marketingVideo.play();
//     }

//     closeVideo = (e) => {
//         e.preventDefault();
//         this.setState({ videoOpen: false });
//         this.marketingVideo.pause();
//     }

//     handleSubmitMarketingForm = (data) => {
//         var email = data['email'];
//         var zip = data['zip'];

//         this.props.fetchZip(zip);
//         this.props.setEmail(email);
//         this.props.dispatch(captureProspect({ email, zip }));

//         localStorage.setItem("prospectZip", zip);

//         this.setState({ redirect: true });
//         this.props.history.push("/new-car/drivers");

//         //newrelic.setCustomAttribute("user_email", this.props.setEmail(data['email']));
//         //newrelic.setCustomAttribute("user_zip", this.props.fetchZip(data['zip']));
//     };

//     emailInput() {
//         const valid = this.state.emailValid ? "valid" : "invalid"
//         return (
//             <input
//                 className={`driver-detail-text-input email-input ${valid}`}
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 autoComplete="email"
//             // onBlur={this.validateEmail.bind(this)}
//             // value={this.props.drivers[this.props.currentDriver].data.attributes.email}
//             // onChange={this.handleInputChange.bind(this)}
//             />
//         );
//     }

//     // handleInputChange(event) {
//     // updateDriver(event);
//     // }

//     validateEmail = () => {
//         if (Validator.validateEmail(this.props.drivers[this.props.currentDriver].data.attributes.email)) {
//             this.setState({ emailValid: true });
//         } else {
//             this.setState({ emailValid: false });
//         }
//     }

//     render() {

//         if (Rfq.submitted(this.props.rfq)) {
//             // return <Redirect to="/new-car/quotes" />
//         }

//         const hasStartedForm = this.props.formProgress && this.props.formProgress.firstDriverCreated;
//         const startedFormLastPathname = localStorage.getItem('formProgressPathname');

//         return (
//             <div
//                 className="new-car-start-container"
//                 onScroll={this.onScroll}
//                 ref={(c) => {
//                     this.container = c;
//                 }}
//             >
//                 <TopBar showDashboard={this.props.login.loggedIn} />

//                 <div className="section-parallax section-top-container">
//                     <div className="section-container section-top">
//                         <video
//                             autoPlay
//                             playsInline
//                             muted
//                             loop
//                             poster="data:image/gif,AAAA"
//                             className="background-video"
//                             ref={(c) => {
//                                 this.video = c;
//                             }}
//                         >
//                             <source src={backgroundVideo} type="video/mp4" />
//                         </video>
//                         <section>
//                             <div>
//                                 <div className="vertical-logo">
//                                     <LogoIcon className="logo-icon" />
//                                     <span className="top-bar-logo">seeker</span>
//                                 </div>
//                                 <h1 className="cta-text">
//                                     Shopping real insurance quotes is not instantaneous. But it should be painless.
//                                 </h1>
//                                 <Form
//                                     className="marketing-zip-form"
//                                     onSubmit={this.handleSubmitMarketingForm}
//                                 >
//                                     <FormInput
//                                         formKey="email"
//                                         type="email"
//                                     />
//                                     <FormInput
//                                         formKey="zip"
//                                         type="zip"
//                                     />
//                                     <FormButton
//                                         text='Get Started'
//                                         style={{ width: '100%', maxWidth: 320 }}
//                                     />
//                                 </Form>
//                                 <div className="fp-video">
//                                     <a href="#" className="video-link" onClick={this.openVideo}>
//                                         <img src={videoIcon} className="video-icon" />
//                                         <p>See what makes us different</p></a>
//                                 </div>
//                             </div>
//                         </section>
//                         <a href="#" className="scroll-down-button" onClick={this.handleScrollDownClick}>
//                             <i className="material-icons down-icon">keyboard_arrow_down</i>
//                         </a>
//                     </div>
//                 </div>
//                 <div
//                     className="section-parallax"
//                     data-parallax-magnitude="2.3"
//                     ref={c => {
//                         this.section1 = c;
//                     }}
//                 >
//                 </div>
//                 <div className="section-parallax">
//                     <div className="section-container section-light real-quotes-section">
//                         <div className="section-width-wrap">
//                             <img src={smilingManImage} className="section-image" />
//                             <section>
//                                 <h1>
//                                     Real Quotes From Agents<br />In Your Neighborhood.
//                                 </h1>
//                                 <div className="text-container">
//                                     <p>
//                                         Most auto insurance comparison platforms ask for your information but only to
//                                         send you to the actual insurance websites when you are ready to buy.
//                                     </p>
//                                     <p>
//                                         They take the referral fees and you get to start over again. At Seeker, the
//                                         quotes you see are from real agents.
//                                     </p>
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="section-parallax">
//                     <div
//                         className="section-container smart-matching-section"
//                         ref={(c) => {
//                             this.smartMatchingSection = c;
//                         }}
//                     >
//                         <div className="section-width-wrap">
//                             <section>
//                                 <h1>
//                                     Smart Matching With The Right Agent.<br />It’s Like Love At First Glance.
//                                 </h1>
//                                 <div className="text-container">
//                                     <p>
//                                         Seeker is not affiliated with any insurance agencies. This gives us the ability
//                                         to
//                                         fairly and critically assess each agent’s quote based on your preferences across
//                                         5 dimensions: Price, Location, Service Level, Reputation, and Claim
//                                         Satisfaction.
//                                     </p>
//                                     <p>
//                                         Out of thousands of agents in our database, we will only match you with the 10
//                                         best matched in your area.
//                                     </p>
//                                 </div>
//                             </section>
//                         </div>
//                         <img src={locationPinImage} className="pin-image location-pin" />
//                         <img src={brandPinImage} className="pin-image brand-pin" />
//                         <img src={pricePinImage} className="pin-image price-pin" />
//                         <img src={servicePinImage} className="pin-image service-pin" />
//                     </div>
//                 </div>
//                 <div className="section-parallax overflow-visible">
//                     <div className="section-container section-light your-control-section">
//                         <div className="section-width-wrap">
//                             <img src={ipadImage} className="section-image ipad-image" />
//                             <section>
//                                 <h1>
//                                     No Unsolicited Contacts.<br />Everything In Your Control.
//                                 </h1>
//                                 <div className="text-container">
//                                     <p>
//                                         It takes up to 24 hours to get 5 real quotes from the local agents. After that,
//                                         it’s completely up to you on what you’d like to do with the information.
//                                     </p>
//                                     <p>
//                                         If and when you are ready to talk, just let Seeker know how you would prefer to
//                                         be
//                                         contacted and the agent of your choice will reach out to you.
//                                     </p>
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="section-parallax">
//                     <div className="section-container last-section">
//                         <div className="section-width-wrap" style={{ padding: 30 }}>
//                             <section>
//                                 <LogoIcon className="logo-icon" />
//                                 <h1>
//                                     Real Quotes. <br className="show-small" />Real Choices.{' '}
//                                 </h1>
//                                 <p style={{ paddingBottom: 20 }}>Ready to give it a whirl? Start with your zipcode below:</p>
//                                 <Form
//                                     className="marketing-zip-form"
//                                     onSubmit={this.handleSubmitMarketingForm}
//                                 >
//                                     <FormInput
//                                         formKey="email"
//                                         type="email"
//                                     />
//                                     <FormInput
//                                         formKey="zip"
//                                         type="zip"
//                                     />
//                                     <FormButton
//                                         text='Get Started'
//                                         style={{ width: '100%', maxWidth: 320 }}
//                                     />
//                                 </Form>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="section-parallax">
//                     <div className="section-container section-light footer-section">
//                         <div className="section-width-wrap">
//                             <Footer />
//                         </div>
//                     </div>
//                 </div>
//                 <div className={`video-modal ${this.state.videoOpen ? 'video-modal-open' : ''}`}>
//                     <div className="video-modal-background" onClick={this.closeVideo} />
//                     <div className="close-circle" onClick={this.closeVideo}>x</div>
//                     <video controls className="marketing-video" ref={c => (this.marketingVideo = c)}>
//                         <source src={marketingVideo} type="video/mp4" />
//                     </video>
//                 </div>

//                 {hasStartedForm && startedFormLastPathname && (
//                     <StartedFormCTA
//                         lastPathname={startedFormLastPathname}
//                     />
//                 )}

//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         login: state.login,
//         formProgress: state.formProgress,
//         rfq: state.rfqs.rfqs
//     };
// }

// export default connect(mapStateToProps)(NewCarStart);


import React, { Component } from "react"
import { connect } from 'react-redux';
import Hero from "../../components/hero/hero";
import Layout from "../../components/layout/layout";
import HomepageHeader from "../../components/homepage-header/homepage-header";
import SeekerLove from "../../components/seeker-love/seeker-love";
import BrandLogo from "../../components/brand-logos/brand";
import Review from "../../components/review/review";
import SeekerWork from "../../components/seeker-work/seeker-work";
import Footer from "../../components/footer/footer";
import Seek from "../../components/seek/seek";


export class HomePage extends Component {
  render() {
    const bgColor: string = '#f1f1f1';

    return (
      <Layout visibleFooter={false} title='Home' bgColor={bgColor}>
        <HomepageHeader />
        {/* <Hero fetchZip={()=> {}}/>
        <SeekerLove />
        <Seek />
        <BrandLogo />
        <Review />
        <SeekerWork />
        <Footer visibleFooter={false} fetchZip={()=> {}} /> */}
      </Layout>
    )
  }
}

export default HomePage;
