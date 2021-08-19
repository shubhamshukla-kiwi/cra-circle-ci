import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import carImg from '../../assets/images/homepage/signup-2.png';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { addVehicleInfoSchema } from '../../constants/formikSchemaValidation';
import { initialAddVehicleInfoValue } from '../../constants/formikValue';
import { Vehicle } from '../../constants/types';
import { states } from '../../constants/app.const';

import './car-detail.css';
import { DatePicker } from '@material-ui/pickers';

interface Props {
  saveVehicleInfo: Function,
  vehicle: Vehicle,
  drivers: T
}

const CarDetail = (props: Props) => {
  return (
    <div className="car-detail-dashboard">
      <div className="new-car-container">
        <div className="onboard-container">
          <OnboardHeader />
          <div className="navigation-section">
            <TabNavigator />
            <div className="detail-dashboard car-details-wrapper">
              <TransitionGroup className="car-detail-transition-group">
                <>
                <div className="header-container-row">
                  <img src={carImg} alt="icon"></img>
                  <h4>
                    Add Vehicle
                  </h4>
                </div>
                <Formik
                  initialValues={{...initialAddVehicleInfoValue, ...props.vehicle}}
                  validationSchema={addVehicleInfoSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    props.saveVehicleInfo(values);
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
                              <DatePicker
                                className={`form-control ${!errors.year ? '' : 'error'}`}
                                label="Vehicle Year"
                                views={["year"]}
                                name="year"
                                onChange={(value) => {
                                  setFieldValue("year", value)
                                }}
                                value={values.year}
                                InputProps={{ disableUnderline: true }}
                                format="yyyy"
                                maxDate={new Date()}

                              />
                              <span className="error-msg"><ErrorMessage name="year" /></span>
                          </div>
                          <div className="form-group">
                            <TextField
                              select
                              className={`form-control ${!errors.make ? '' : 'error'}`}
                              label="Vehicle Make"
                              name="make"
                              onChange={handleChange}
                              value={values.make}
                              InputProps={{ disableUnderline: true }}>
                              {states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <span className="error-msg"><ErrorMessage name="make" /></span>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <TextField
                              select
                              className={`form-control ${!errors.model ? '' : 'error'}`}
                              label="Vehicle Model"
                              name="model"
                              onChange={handleChange}
                              value={values.model}
                              InputProps={{ disableUnderline: true }}>
                              {states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <span className="error-msg"><ErrorMessage name="model" /></span>
                          </div>
                          <div className="form-group">
                            <TextField
                              select
                              className={`form-control ${!errors.mileage ? '' : 'error'}`}
                              label="Average Annual Milage"
                              name="mileage"
                              onChange={handleChange}
                              value={values.mileage}
                              InputProps={{ disableUnderline: true }}>
                              {states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <span className="error-msg"><ErrorMessage name="mileage" /></span>
                          </div>
                        </div>
                        <div className="form-group">
                          <TextField
                            select
                            className={`form-control ${!errors.driver ? '' : 'error'}`}
                            label="Primary Driver"
                            name="driver"
                            onChange={handleChange}
                            value={values.driver}
                            InputProps={{ disableUnderline: true }}>
                            {props.drivers.map((option) => (
                              <MenuItem key={option.driverInfo.firstName} value={option.driverInfo.firstName}>
                                {option.driverInfo.firstName} {option.driverInfo.firstName}
                              </MenuItem>
                            ))}
                          </TextField>
                          <span className="error-msg"><ErrorMessage name="driver" /></span>

                        </div>
                        <div className="form-group">
                          <TextField
                            select
                            className={`form-control ${!errors.ownership ? '' : 'error'}`}
                            label="Ownership Status"
                            name="ownership"
                            onChange={handleChange}
                            value={values.ownership}
                            InputProps={{ disableUnderline: true }}>
                            {states.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                          <span className="error-msg"><ErrorMessage name="ownership" /></span>

                        </div>
                        <div className="btn-selection">
                          {/* <Link onClick={(e) => {
                            handleSubmit(e);
                            naviagte(history, false)
                          }} className="button-transparent" to="/car-detail">Save & add another vehicle</Link> */}
                          <Link onClick={(e) => {
                            handleSubmit(e);
                          }} className="button-primary" to="/car-plan">Next</Link>
                        </div>
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

export default CarDetail;
