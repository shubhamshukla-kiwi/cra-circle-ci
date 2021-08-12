import React, { Component } from 'react';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

class AgentVerifyEmail extends Component {
    constructor() {
        super();
        this.state = { 
            showSetPasswordModal: false
        };

        this.handleSetPasswordModal = this.handleSetPasswordModal.bind(this);
        this.handleSetPasswordCloseModal = this.handleSetPasswordCloseModal.bind(this);
    }
    handleSetPasswordModal() {
        this.setState({ showSetPasswordModal: true });
       this.props.handleVerifyCloseModal();
    }
    handleSetPasswordCloseModal() {
        this.setState({ showSetPasswordModal: false });
    }
    render() {

        return (
            <div>
            <ReactModal
                isOpen={this.props.showVerifyModal}
                className="verify-email-modal"
            >
                <div className="otp-wrap">
                <div className="login-screen">
                    <div className="right-content">
                        <div className="input-data">
                            <h4>Verify your email address</h4>
                            <p>We just emailed a six-digit code to <span className="mail-link">adrian****90@yahoo.com</span></p>
                            <p>Please enter the code below to sign in.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <div className="otp-password">
                                        <div className="input-list">
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                        <span className="seprator"></span>
                                        <div className="input-list">
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="code-txt">Trouble receiving code? <span>Send again</span></div>
                            </div>
                            <a className="button-primary" href="/agent-add-card" >Verify</a>
                        </div>
                    </div>
                </div>
            </div>
                <button className="close-icon" onClick={this.props.handleVerifyCloseModal}><span class="icon-cross"><span class="path2"></span></span></button>
            </ReactModal>
           
            </div>
        );
    }
}
export default AgentVerifyEmail;

