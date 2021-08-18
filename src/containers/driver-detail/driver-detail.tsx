import React, { Dispatch } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link, useHistory } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import  TextField  from '@material-ui/core/TextField';
import  MenuItem from '@material-ui/core/MenuItem';
import {DatePicker} from '@material-ui/pickers';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import driverImg from '../../assets/images/homepage/signup-3.png';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { addDriverInfoSchema } from '../../constants/formikSchemaValidation';
import { initialAddDriverInfoValue } from '../../constants/formikValue';
import { saveDriverInfo } from '../../actions/onboarding/driver.action';
interface Props {
  dispatch: Dispatch
}

const DriverDetail = (props: Props) => {
  const history = useHistory();
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
    <div className="driver-detail-dashboard">
      <div className="new-car-container">
        <div className="onboard-container">
          <OnboardHeader />
          <div className="navigation-section">
            <TabNavigator />
            <div className="detail-dashboard driver-details-wrapper">
              <TransitionGroup className="driver-detail-transition-group">
                <>
                <div className="header-container-row">
                  <img src={driverImg} alt="icon"></img>
                  <h4>
                    Add Primary Driver
                  </h4>

                </div>
                <Formik
                  initialValues={initialAddDriverInfoValue}
                  validationSchema={addDriverInfoSchema}
                  onSubmit={(values, { setSubmitting, isValidating }) => {
                    props.dispatch(saveDriverInfo(values));
                    history.push(`/driver-detail-info/${props.drivers.length}`)
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                  }) => (
                      <form>
                        <div className="form-row">
                          <div className="form-group">
                            <TextField
                              type="name"
                              className={`form-control ${!errors.firstName ? '' : 'error'}`}
                              name="firstName"
                              onChange={handleChange}
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
                              InputProps={{ disableUnderline: true }}
                              label="Last Name"
                              value={values.lastName}
                            />
                            <span className="error-msg"><ErrorMessage name="lastName" /></span>

                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Driver’s License Number</label>
                            <TextField
                              type="name"
                              className={`form-control ${!errors.licenseNumber ? '' : 'error'}`}
                              name="licenseNumber"
                              onChange={handleChange}
                              InputProps={{ disableUnderline: true }}
                              label="Driver’s License Number"
                              value={values.licenseNumber}
                            />
                            <span className="error-msg"><ErrorMessage name="licenseNumber" /></span>

                          </div>
                          <div className="form-group">

                            <TextField
                              select
                              className={`form-control ${!errors.state ? '' : 'error'}`}
                              label="State/Province"
                              name="state"
                              onChange={handleChange}
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
                        </div>
                        <div className="form-row">
                          <div className="form-group calendar-col">
                            <label>Date of Birth</label>
                            <DatePicker
                              className={`form-control ${!errors.dateOfBirth ? '' : 'error'}`}
                              label="Date of Birth"
                              name="dateOfBirth"
                              onChange={(value) => {
                                setFieldValue("dateOfBirth", value)
                              }}
                              InputProps={{ disableUnderline: true }}
                              value={values.dateOfBirth}
                              format="MM/dd/yyyy"
                            />
                            <span className="error-msg"><ErrorMessage name="dateOfBirth" /></span>
                          </div>
                          <div className="form-group">
                            <label>Gender</label>
                            <TextField
                              select
                              className={`form-control ${!errors.gender ? '' : 'error'}`}
                              label="Gender"
                              name="gender"
                              onChange={handleChange}
                              value={values.gender}
                              InputProps={{ disableUnderline: true }}>
                              {states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <span className="error-msg"><ErrorMessage name="gender" /></span>

                          </div>
                        </div>
                        <div className="form-group">
                          <label>Current Insurance Company</label>
                          <TextField
                            select
                            className={`form-control ${!errors.insuranceCompany ? '' : 'error'}`}
                            label="Current Insurance Company"
                            name="insuranceCompany"
                            onChange={handleChange}
                            value={values.insuranceCompany}
                            InputProps={{ disableUnderline: true }}>
                            {states.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                          <span className="error-msg"><ErrorMessage name="insuranceCompany" /></span>

                        </div>
                        <Link onClick={handleSubmit} className="button-primary" to="/more-driver-detail">Next</Link>
                      </form>)}
                </Formik>
                </>
              </TransitionGroup>
            </div>

          </div>
          <OnboardingFooter />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    drivers: state.drivers
  }
}

export default connect(mapStateToProps)(DriverDetail);
