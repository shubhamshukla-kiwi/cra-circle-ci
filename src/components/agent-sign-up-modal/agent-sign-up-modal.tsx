import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


import OnboardingLeft from '../onboarding-left/onboarding-left';
import VerifyEmail from '../verify-email/VerifyEmail';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import uploadPhoto from './../../assets/images/homepage/upload-photo.svg';
import profileDefault from './../../assets/images/homepage/modal-profile.png';
import { agentSignupSchema } from '../../constants/formikSchemaValidation';
import { initialAgentSignupValue } from '../../constants/formikValue';


ReactModal.setAppElement('#root');
class AgentSignupModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showVerifyModal: false
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
        const states = [
            {
              value: 'CA',
              label: 'CA',
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
                            initialValues={initialAgentSignupValue}
                            validationSchema={agentSignupSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                this.setState({userData: values});
                                this.handleOpenModal();
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                setFieldValue,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                    <div className="input-data">
                                        <h4>Sign Up</h4>
                                        <div className="input-container">
                                            <div className="add-profile-pic">
                                                <div className="add-image">
                                                    <img src={this.state.uploadPhoto?this.state.uploadPhoto:uploadPhoto} alt="upload-pic"></img>
                                                </div>
                                                <span onClick={()=>{this.upload.click()}}>Add Photo</span>
                                                <input ref={(ref) => this.upload = ref} style={{display: 'none'}} id="file" name="file" type="file" onChange={(event) => {
                                                    setFieldValue("file", event.currentTarget.files[0]);
                                                    let reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        this.setState({
                                                            uploadPhoto: reader.result
                                                        });
                                                      };
                                                    reader.readAsDataURL(event.currentTarget.files[0]);
                                                    }} />
                                            </div>
                                            <span className="error-msg"><ErrorMessage name="file" /></span>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <TextField
                                                        type="name"
                                                        className={`form-control ${!errors.firstName ? '' : 'error'}`}
                                                        name="firstName"
                                                        onChange={handleChange}
                                                        label="First Name"
                                                        onBlur={handleBlur}
                                                        InputProps={{ disableUnderline: true }}
                                                        value={values.firstName} />
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
                                                        value={values.lastName} />
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
                                                    InputProps={{ disableUnderline: true }}
                                                    label="Email Address"
                                                    value={values.email} />
                                                    <span className="error-msg"><ErrorMessage name="email" /></span>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone number</label>
                                                <TextField
                                                    type="number"
                                                    className={`form-control ${!errors.phone ? '' : 'error'}`}                                                    name="phone"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Phone number"
                                                    InputProps={{ disableUnderline: true }}
                                                    value={values.phone} />
                                                    <span className="error-msg"><ErrorMessage name="phone" /></span>
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <TextField
                                                    type="text"
                                                    className={`form-control ${!errors.address ? '' : 'error'}`}                                                    name="address"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    InputProps={{ disableUnderline: true }}
                                                    label="Address"
                                                    value={values.address} />
                                                    <span className="error-msg"><ErrorMessage name="address" /></span>
                                            </div>
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
                                            <div className="form-row">
                                                <div className="form-group">
                                                <TextField
                                                    select
                                                    className={`form-control ${!errors.city ? '' : 'error'}`}
                                                    label="City"
                                                    name="city"
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
                                                <div className="form-group">
                                                    <label>Zipcode</label>
                                                    <TextField
                                                        type="number"
                                                        className={`form-control ${!errors.zipcode ? '' : 'error'}`}                                                        name="zipcode"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        InputProps={{ disableUnderline: true }}
                                                        label="Zipcode"
                                                        value={values.zipcode} />
                                                    <span className="error-msg"><ErrorMessage name="zipcode" /></span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Tell us about yourself</label>
                                                <TextField
                                                    type="text"
                                                    className={`form-control ${!errors.bio ? '' : 'error'}`}                                                    name="bio"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    label="Tell us about yourself"
                                                    InputProps={{ disableUnderline: true }}
                                                    value={values.bio} />
                                                    <span className="error-msg"><ErrorMessage name="bio" /></span>
                                            </div>
                                            <div className="form-group">
                                            <TextField
                                                    select
                                                    className={`form-control ${!errors.company ? '' : 'error'}`}
                                                    label="Company"
                                                    name="company"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.company}
                                                    InputProps={{ disableUnderline: true }}>
                                                    {states.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <span className="error-msg"><ErrorMessage name="company" /></span>
                                            </div>
                                        </div>
                                        <div className="custom-checkbox agree-txt">
                                            <input
                                                type="checkbox"
                                                id="style-checkbox"
                                                name="termsCheckbox"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.termsCheckbox} />
                                            <label htmlFor="style-checkbox">I agree to Seekr’s Terms of service & Privacy Policy.</label>
                                            <span className="error-msg"><ErrorMessage name="termsCheckbox" /></span>
                                        </div>
                                        <button className="button-primary" onClick={handleSubmit}>Create a new account</button>
                                        <ReactModal
                                            isOpen={this.state.showModal}
                                            contentLabel="onRequestClose Example"
                                            onRequestClose={this.handleCloseModal}
                                            shouldCloseOnOverlayClick={false}
                                            className="confirm-details-modal agent-confirm-details-modal"
                                        >
                                            <h4>Please confirm your details</h4>
                                            <div className="user-details">
                                                <img src={this.state.uploadPhoto?this.state.uploadPhoto:profileDefault} alt="user pic"></img>
                                                <h5>{values.firstName} {values.lastName}</h5>
                                                <span>{values.email}</span>
                                                <p>{values.address}</p>
                                                <p>{values.state}, {values.city}</p>
                                            </div>
                                            <div className="about-me">
                                                <h6>About me</h6>
                                                <p>{values.bio}</p>
                                            </div>
                                            <div className="co-logo">
                                                <img alt="company" src=""></img>
                                                <span>{values.company}</span>
                                            </div>
                                            <div className="button-wrap">
                                                <Link onClick={this.handleCloseModal} to="/agent">Make an edit</Link>
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
export default AgentSignupModal;

