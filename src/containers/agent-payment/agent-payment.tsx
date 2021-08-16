import React, { Component } from 'react';
import styled from "styled-components"
import Header from '../../components/header/header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import 'react-tabs/style/react-tabs.css';
import DefaultVehicle from '../../assets/images/homepage/dashboard-vehicle.png';
import DefaultProfile from '../../assets/images/homepage/dashboard-profile.png';
import CardImg from '../../assets/images/homepage/visa.png';
import DownloadBtn from '../../assets/images/homepage/download.svg';

class AgentPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showSelectBox: false,
        }
        // this.props.dispatch(getUserRfqRequest());

    }
    render() {
        return (
            <div className="agent-container">
                <div className="dashboard-container agent-dashboard">
                    <Header
                        show={this.state.show}
                        setShow={() => this.setState({ show: !this.state.show })}
                    />
                    <Row className="row">
                        <div className="dashboard-header">
                            <div className="profile-image">
                                <img src={DefaultProfile} alt="default-profile"></img>
                                <div className="logo-image">
                                    <img src={DefaultVehicle} alt="logo-default"></img>
                                </div>
                            </div>
                            <div className="status-wrap" onClick={() => {
                                // setShowBox(!this.state.showBox)
                                this.setState({
                                    showSelectBox: !this.state.showSelectBox
                                })
                            }}>
                                <div className="status-action">
                                    <label>Status:</label>
                                    <span>Active</span>
                                </div>
                                {this.state.showSelectBox &&
                                    <div className="dropdown">
                                        <ul>
                                            <li>
                                                <a href="#">Active</a>
                                            </li>
                                            <li>
                                                <a href="#">In-active</a>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className="top-head">
                                <h5>Augustus Edwards</h5>
                                <div className="rating-star">
                                    <span className="font-icon icon-stars"></span>
                                    4.8
                                </div>
                            </div>
                            <p>Get connection requests from customers who like your profile and connect
                                with them on phone, email or message.</p>
                        </div>
                    </Row>
                    <Row className="payment-wrapper">
                        <div className="back-btn">
                            <a href="/agent-dashboard">
                                <span className="icon-back-arrow font-icon"></span>
                                Back to Dashbaord
                            </a>
                        </div>
                        <div className="payment-list-wrap">
                            <div className="payment-data">
                                <div className="price-txt">
                                    <h6>$149.99</h6>
                                    <span>Payment due on Jul 20, 2021</span>
                                </div>
                                <button type="button" className="btn-primary">Make Payment</button>
                            </div>
                            <h5>My Payments</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Card number</th>
                                        <th>Amount</th>
                                        <th>Payment on</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-th="Card number">
                                            <div className="card-detail">
                                                <img src={CardImg} alt="icon"></img>
                                                <span>XXXX 4242</span>
                                            </div>
                                        </td>
                                        <td data-th="Amount">
                                            $149.99
                                        </td>
                                        <td data-th="Payment on">
                                            Jun 20, 2021, 10:30 am
                                        </td>
                                        <td data-th="Action">
                                            <div className="invoice-txt">
                                                <img src={DownloadBtn} alt="download"></img>
                                                <span>Download Invoice</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-th="Card number">
                                            <div className="card-detail">
                                                <img src={CardImg} alt="icon"></img>
                                                <span>XXXX 4242</span>
                                            </div>
                                        </td>
                                        <td data-th="Amount">
                                            $149.99
                                        </td>
                                        <td data-th="Payment on">
                                            Jun 20, 2021, 10:30 am
                                        </td>
                                        <td data-th="Action">
                                            <div className="invoice-txt">
                                                <img src={DownloadBtn} alt="download"></img>
                                                <span>Download Invoice</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-th="Card number">
                                            <div className="card-detail">
                                                <img src={CardImg} alt="icon"></img>
                                                <span>XXXX 4242</span>
                                            </div>
                                        </td>
                                        <td data-th="Amount">
                                            $149.99
                                        </td>
                                        <td data-th="Payment on">
                                            Jun 20, 2021, 10:30 am
                                        </td>
                                        <td data-th="Action">
                                            <div className="invoice-txt">
                                                <img src={DownloadBtn} alt="download"></img>
                                                <span>Download Invoice</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Row>

                    <OnboardingFooter />
                </div>
            </div>
        )
    }
}


// function mapStateToProps(state) {
//     return {
//         navigationDrawerState: state.navigationDrawerState,
//         loginRequested: state.login.loginRequested,
//         loggedIn: state.login.loggedIn,
//         login: state.login
//     }
// }

const Row = styled.div`

`

export default AgentPayment;
