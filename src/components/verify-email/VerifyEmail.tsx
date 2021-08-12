import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Formik } from 'formik';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { otpValidationSchema } from '../../constants/app.const';
import { registerRequest } from '../../actions';
ReactModal.setAppElement('#root');

class VerifyEmail extends Component {
    constructor() {
        super();
        this.state = { 
            showSetPasswordModal: false
        };

        this.handleSetPasswordModal = this.handleSetPasswordModal.bind(this);
        this.handleSetPasswordCloseModal = this.handleSetPasswordCloseModal.bind(this);
        this.onKeyPressFn = this.onKeyPressFn.bind(this);

    }
    handleSetPasswordModal() {
        this.setState({ showSetPasswordModal: true });
       this.props.handleVerifyCloseModal();
    }
    handleSetPasswordCloseModal() {
        this.setState({ showSetPasswordModal: false });
    }
    onKeyPressFn(event) {
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
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
                    <Formik
                            initialValues={{
                                field1: '',
                                field2: '',
                                field3: '',
                                field4: '',
                                field5: '',
                                field6: '',                                
                            }}
                            validationSchema={otpValidationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                setSubmitting(false);
                                this.props.dispatch(registerRequest(this.props.userData))
                                this.props.history.push("/new-car");
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                        <form className="input-data">
                            <h4>Verify your email address</h4>
                            <p>We just emailed a six-digit code to <span className="mail-link">{this.props.userData?.email}</span></p>
                            <p>Please enter the code below to sign in.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <div className="otp-password">
                                        <div className="input-list">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field1"
                                                onChange={e=> {
                                                    handleChange(e)
                                                    this.onKeyPressFn(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.field1}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field2"
                                                onChange={e=> {
                                                    handleChange(e)
                                                    this.onKeyPressFn(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.field2}
                                                maxLength="1"
                                                />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field3"
                                                onChange={e=> {
                                                    handleChange(e)
                                                    this.onKeyPressFn(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.field3}
                                                maxLength="1"
                                                />
                                        </div>
                                        <span className="seprator"></span>
                                        <div className="input-list">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field4"
                                                onChange={e=> {
                                                    handleChange(e)
                                                    this.onKeyPressFn(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.field4}
                                                maxLength="1"
                                                />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field5"
                                                onChange={e=> {
                                                    handleChange(e)
                                                    this.onKeyPressFn(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.field5}
                                                maxLength="1"
                                                />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field6"
                                                onChange={e=> {
                                                    handleChange(e)
                                                    this.onKeyPressFn(e)
                                                }}
                                                onBlur={handleBlur}
                                                value={values.field6}
                                                maxLength="1"
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="code-txt">Trouble receiving code? <span>Send again</span></div>
                            </div>
                            <button type="submit" className="button-primary" onClick={handleSubmit}>Verify</button>
                        </form>)}
                        </Formik>
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

