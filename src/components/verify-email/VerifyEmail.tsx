import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import OTPComponent from '../otp-modal/otp';


ReactModal.setAppElement('#root');

class VerifyEmail extends Component {
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
                    <OTPComponent isVerify={true} handleVerifyCloseModal={this.props.handleVerifyCloseModal}/>
                    </div>
                </div>
            </div>
                <button className="close-icon" onClick={this.props.handleVerifyCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
            </ReactModal>
            </div>
        );
    }
}
function mapStateToProps() {
    return {};
}
export default withRouter(connect(mapStateToProps)(VerifyEmail));

