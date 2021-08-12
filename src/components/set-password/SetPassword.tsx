import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class SetPassword extends Component {
    
    render() {

        return (
            <ReactModal
            isOpen={this.props.showSetPasswordModal}
                className="set-password-modal"
            >
                <div className="set-password-wrap">
                <div className="login-screen">
                    <div className="right-content">
                        <div className="input-data">
                            <h4>Set Password</h4>
                            <p>Your password must atleast be 8 characters.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <Link className="button-primary" to="/">Save</Link>
                        </div>
                    </div>
                </div>
            </div>
                <button className="close-icon" onClick={this.props.handleSetPasswordCloseModal}><span class="icon-cross"><span class="path2"></span></span></button>
            </ReactModal>
        );
    }
}
export default SetPassword;

