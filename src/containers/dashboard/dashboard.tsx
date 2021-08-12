import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Row } from "react-styled-flexboxgrid";
import Header from '../../components/header/header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import './dashboard.css';
import AgentSlider from "../../components/agent-slider/agent-slider";
import seekerIcon from '../../assets/images/homepage/seeker-icon.png';
import userDefaultIcon from '../../assets/images/homepage/default-user.png';
import emptyImage from '../../assets/images/homepage/empty.png';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        // this.props.dispatch(getUserRfqRequest());
    }
    // const [show, setShow] = React.useState();
    render() {
        // if (!this.props.loggedIn) {
        //     return <Redirect to="/login"/>
        // }

        return (
            // <div className={this.props.navigationDrawerState.open ? 'dashboard dashboard-open' : 'dashboard'}>
            //     {!this.props.login.loggedIn ? <Redirect to="/login"/> : null}
            //     <NavigationTop>
            //         <Link to="/dashboard/quotes">Quotes</Link>
            //     </NavigationTop>
            //     <NavigationBottom/>
            //     <CustomerDashboard/>
            // </div>
            <div className="container">
                <div className="dashboard-container">
                    <Header 
                    show = {this.state.show}
                    setShow ={()=>this.setState({show: !this.state.show})}
                    />
                    <Row className="row">
                        <div className="dashboard-left">
                            <div className="profile-container">
                            <span class="icon-cross font-icon" onClick={()=>this.setState({show: !this.state.show})}>
                                <span class="path2 font-icon"></span>
                            </span>
                                <img alt="Seeker icon" src={seekerIcon} />
                                <div className="profile-content">
                                    <h3>Adrian Dawson</h3>
                                    <p className="profile-address">76 Afhe Street,60005</p>
                                </div>
                            </div>
                            <div className="user-list-container">
                                <h4 className="user-title">1 driver added</h4>
                                <ul className="user-list">
                                    <li>
                                        <a className="user-link">
                                            <img alt="Brand icon" src={userDefaultIcon} />
                                            <div className="profile-content">
                                                <h5>Adrian</h5>
                                                <p className="profile-address">0123456789-002</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-list-container">
                                <h4 className="user-title">2 vehicles added</h4>
                                <ul className="user-list">
                                    <li>
                                        <a className="user-link">
                                            <img alt="Brand icon" src={userDefaultIcon} />
                                            <div className="profile-content">
                                                <h5>Fiat - Abarth</h5>
                                                <p className="profile-address">Coverage: Best</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="user-link">
                                            <img alt="Brand icon" src={userDefaultIcon} />
                                            <div className="profile-content">
                                                <h5>Fiat - Abarth</h5>
                                                <p className="profile-address">Coverage: Best</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard-right">
                            <div className="empty-container d-none">{/* show when nothing on Dashboard and remove "d-none" class*/}
                                <div className="empty-container-inner">
                                    <img alt="Empty icon" src={emptyImage} className="empty-image" />
                                    <h2>Welcome!</h2>
                                    <p>We are in the process of curating the top agents for you. we will get back to you soon.</p>
                                    <p className="extract">&mdash; Team Seekr</p>
                                </div>
                            </div>

                            <div className="dashboard-heading">Hello Seekr!</div>
                            <div className="dashboard-sub-heading">Based on your information, we have listed 5 best quotes for you that match your criteria well. Find the quote you like and you can contact us through a call, email or send us a message.</div>
                            <AgentSlider />
                        </div>
                    </Row>
                    <OnboardingFooter />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        navigationDrawerState: state.navigationDrawerState,
        loginRequested: state.login.loginRequested,
        loggedIn: state.login.loggedIn,
        login: state.login
    }
}

export default connect(mapStateToProps)(Dashboard)
