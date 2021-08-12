import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import VerifyEmail from '../verify-email/VerifyEmail';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import uploadPhoto from './../../assets/images/homepage/upload-photo.svg';
import profileDefault from './../../assets/images/homepage/modal-profile.png';
import { agentSignupSchema } from '../../constants/app.const';


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

        return (
            <div className="signup-wrap screen-container">
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <Formik
                            initialValues={{
                                file: null,
                                firstName: '',
                                lastName: '',
                                zipcode: '',
                                email: '',
                                phone: '',
                                address: '',
                                state: '',
                                city: '',
                                company: '',
                                bio: '',
                                termsCheckbox: false
                            }}
                            validationSchema={agentSignupSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
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
                                                    <ErrorMessage name="file" />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input
                                                        type="name"
                                                        className="form-control"
                                                        name="firstName"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.firstName} />
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
                                                        value={values.lastName} />
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
                                                    value={values.email} />
                                                    <ErrorMessage name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone number</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="phone"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.phone} />
                                                    <ErrorMessage name="phone" />
                                            </div>
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="address"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.address} />
                                                    <ErrorMessage name="address" />
                                            </div>
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
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>City</label>
                                                    <select
                                                        name="city"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.city}>
                                                        <option value="">Select</option>
                                                        <option value="CA">CA</option>
                                                    </select>
                                                    <ErrorMessage name="city" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Zipcode</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="zipcode"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.zipcode} />
                                                        <ErrorMessage name="zipcode" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Tell us about yourself</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="bio"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.bio} />
                                                    <ErrorMessage name="bio" />
                                            </div>
                                            <div className="form-group">
                                                <select 
                                                    name="company"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.company}>
                                                    <option value="">Select</option>
                                                    <option value="1">Cubicles insurance.co</option>
                                                    <option value="2">Cubicles insurance.co</option>
                                                </select>
                                                <label>Company name</label>
                                                <ErrorMessage name="company" />
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
                                            <ErrorMessage name="termsCheckbox" />
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
                                                <img src=""></img>
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

