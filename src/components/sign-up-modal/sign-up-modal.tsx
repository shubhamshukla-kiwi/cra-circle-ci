import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

import OnboardingLeft from '../onboarding-left/onboarding-left';
import VerifyEmail from '../verify-email/VerifyEmail';
import { Link, withRouter } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import ReactModal from 'react-modal';
import { SignupSchema } from '../../constants/formikSchemaValidation';
import { saveEmail } from '../../actions';
import { ZipCodeContext } from '../../contexts/ZipCodeContext/ZipCodeContext';
import { initialSignupValue } from '../../constants/formikValue';

ReactModal.setAppElement('#root');
class SignupModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showVerifyModal: false,
            userData: null,
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleVerifyModal = this.handleVerifyModal.bind(this);
        this.handleVerifyCloseModal = this.handleVerifyCloseModal.bind(this);
    }
    static contextType = ZipCodeContext;

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handleVerifyModal = () => {
        this.setState({ showVerifyModal: true });
        this.handleCloseModal();
    }
    handleVerifyCloseModal= () => {
        this.setState({ showVerifyModal: false });
    }
    render() {
        let data = this.context.data;
        data = data && data.places[0]['state abbreviation'];
        if(!data) {
            this.props.history.push('/');
        }
        const states = [
            {
              value: 'CA',
              label: 'CA',
            },
            {
                value: 'WA',
                label: 'WA',
            },
            {
              value: 'AUS',
              label: 'AUS',
            }
          ];
        return (
            <div className="signup-wrap screen-container">
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <Formik
                            initialValues={Object.assign(initialSignupValue, {state: data})}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { setSubmitting, isValidating }) => {
                                this.props.dispatch(saveEmail(values.email))
                                this.setState({userData: values})
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
                            }) => (<div className="input-data">
                                <h4>Sign Up</h4>
                                <div className="input-container">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>First Name</label>
                                             <TextField
                                                type="name"
                                                className={`form-control ${!errors.firstName ? '' : 'error'}`}
                                                name="firstName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                label="First Name"
                                                InputProps={{ disableUnderline: true }}
                                                value={values.firstName}
                                            />
                                            <span className="error-msg"><ErrorMessage name="firstName" /></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                             <TextField
                                                type="name"
                                                className={`form-control ${!errors.lastName ? '' : 'error'}`}
                                                name="lastName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                InputProps={{ disableUnderline: true }}
                                                label="Last Name"
                                                value={values.lastName}
                                            />
                                            <span className="error-msg"><ErrorMessage name="lastName" /></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                         <TextField
                                            type="email"
                                            className={`form-control ${!errors.email ? '' : 'error'}`}
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            label="Email Address"
                                            value={values.email}
                                            InputProps={{ disableUnderline: true }}/>
                                        <span className="error-msg"><ErrorMessage name="email" /></span>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                         <TextField
                                            type="text"
                                            className={`form-control ${!errors.address ? '' : 'error'}`}
                                            name="address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                            label="Address"
                                            InputProps={{ disableUnderline: true }}/>
                                        <span className="error-msg"><ErrorMessage name="address" /></span>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                                <TextField
                                                    select
                                                    className={`form-control ${!errors.state ? '' : 'error'}`}
                                                    label="State/Province"
                                                    name="state"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.state}
                                                    InputProps={{ disableUnderline: true }}>
                                                    {states.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <span className="error-msg"><ErrorMessage name="state" /></span>
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                            select
                                            label="City"
                                            name="city"
                                            className={`form-control ${!errors.city ? '' : 'error'}`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                            InputProps={{ disableUnderline: true }}>
                                            {states.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <span className="error-msg"><ErrorMessage name="city" /></span>
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
                                    <span className="error-msg"><ErrorMessage name="termsCheckbox" /></span>
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
                    email={this.state.userData?this.state.userData.email:''}
                    showVerifyModal={this.state.showVerifyModal}
                    handleVerifyCloseModal={this.handleVerifyCloseModal}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}

}
export default withRouter(connect(mapStateToProps)(SignupModal));

