import React, { Component } from 'react';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import VerifyEmail from '../verify-email/VerifyEmail';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import ReactModal from 'react-modal';
import { SignupSchema } from '../../constants/app.const';

ReactModal.setAppElement('#root');
class SignupModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showVerifyModal: false,
            userData: null
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleVerifyModal = this.handleVerifyModal.bind(this);
        this.handleVerifyCloseModal = this.handleVerifyCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleVerifyModal() {
        this.setState({ showVerifyModal: true });
        this.handleCloseModal();
    }
    handleVerifyCloseModal() {
        this.setState({ showVerifyModal: false });
    }
    render() {

        return (
            <div className="signup-wrap screen-container">
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <Formik
                            initialValues={{
                                firstName: 'shubham',
                                lastName: 'shukla',
                                email: 'shubham@yopmail.com',
                                address: 'next',
                                state: '',
                                city: '',
                                termsCheckbox: false
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { setSubmitting, isValidating }) => {
                                this.setState({ userData: values })
                                this.handleOpenModal();
                                setSubmitting(false);
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
                            }) => (<div className="input-data">
                                <h4>Sign Up</h4>
                                <div className="input-container">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                name="firstName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstName}
                                            />
                                            <ErrorMessage name="firstName" />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                name="lastName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastName}
                                            />
                                            <ErrorMessage name="lastName" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <ErrorMessage name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                        />
                                        <ErrorMessage name="address" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>State/Province</label>
                                            <select
                                                name="state"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.state}>
                                                <option value="">Select</option>
                                                <option value="CA">CA</option>
                                            </select>
                                            <ErrorMessage name="state" />
                                        </div>
                                        <div className="form-group">
                                            <label>City</label>
                                            <select
                                                name="city"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            >
                                                <option value="">Select</option>
                                                <option value="NY">NY</option>
                                            </select>
                                            <ErrorMessage name="city" />
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-checkbox agree-txt">
                                    <input
                                        name="termsCheckbox"
                                        type="checkbox"
                                        id="style-checkbox"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.termsCheckbox}
                                    />
                                    <label htmlFor="style-checkbox">I agree to Seekr’s Terms of service & Privacy Policy.</label>
                                    <ErrorMessage name="termsCheckbox" />
                                </div>
                                <button className="button-primary" onClick={handleSubmit}>Create a new account</button>
                                <ReactModal
                                    isOpen={this.state.showModal}
                                    contentLabel="onRequestClose Example"
                                    onRequestClose={this.handleCloseModal}
                                    shouldCloseOnOverlayClick={false}
                                    className="confirm-details-modal"
                                >
                                    <h4>Please confirm your details</h4>
                                    <div className="user-details">
                                        <h5>{values.firstName} {values.lastName}</h5>
                                        <span>{values.lastName}</span>
                                        <p>{values.address}</p>
                                        <p>{values.city}, {values.state}</p>
                                    </div>
                                    <div className="button-wrap">
                                        <Link to='/sign-up' onClick={this.handleCloseModal}>Make an edit</Link>
                                        <button className="button-primary" onClick={this.handleVerifyModal}>Yes, Confirm</button>
                                    </div>
                                    <button className="close-icon" onClick={this.handleCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                                </ReactModal>

                            </div>)}
                        </Formik>
                    </div>
                </div>
                <VerifyEmail
                    showVerifyModal={this.state.showVerifyModal}
                    handleVerifyCloseModal={this.handleVerifyCloseModal}
                    userData={this.state.userData}
                />
            </div>
        );
    }
}
export default SignupModal;

