import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import './driver-detail.css';
import cross from '../../assets/images/homepage/cross.svg';
import { DatePicker } from '@material-ui/pickers';
import { MenuItem, TextField } from '@material-ui/core';
import { driverViolationSchema } from '../../constants/formikSchemaValidation';
import { Driver } from '../../constants/types';
import { initialDriverViolationValues } from '../../constants/formikValue';
import { comapnies } from '../../constants/app.const';

interface Props {
    saveDriverViolations: Function,
    driver: Driver,
    driverViolations: T,
    prevState: Function
}



export class Violation {
    constructor() {
        this.labelTitle = '';
        this.year = null;
        this.category = '';
        this.addNew = true;
    }
}

let addNew = false;

const setAddNew = (flag) => {
    addNew = flag;
}

const DriverViolations = (props: Props) => {
    return (
        <div className="detail-dashboard driver-incident-details-wrapper">
            <TransitionGroup className="driver-detail-transition-group">
                <>
                    <div className="header-container-row">
                        <span onClick={props.prevState} className="icon-back-arrow font-icon"></span>
                        <h4>Accidents/Moving Violations</h4>
                    </div>
                    <Formik
                        initialValues={{ ...initialDriverViolationValues, ...props.driverViolations }}
                        validationSchema={driverViolationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            props.saveDriverViolations(values, addNew)
                        }}
                    >
                        {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => {
                            return (
                                <form>
                                    <div className="check-driver-details">
                                        <p>Check if {props.driver && props.driver.firstName} {props.driver && props.driver.lastName} has had no violations in the past 5 years</p>
                                        <div className="form-group custom-radio-btn">
                                            <input
                                                type="checkbox"
                                                name="noViolation"
                                                onChange={handleChange}
                                                value={values.noViolation}
                                                id="check"
                                            />
                                            <label htmlFor="check"></label>
                                        </div>
                                    </div>
                                    <FieldArray
                                        name="violations"
                                        render={({ insert, remove, push }) => (
                                            <>
                                                {values.violations.map((item, index) => (
                                                    <div className="detail-list" key={index}>
                                                        <div className="header-top">
                                                            {!item.addNew && <h4>{item.labelTitle}</h4>}
                                                            {item.addNew && <TextField
                                                                type="text"
                                                                name={`driverDetail.${index}.labelTitle`}
                                                                className={`form-control`}
                                                                placeholder='Add other information'
                                                                onChange={(event) => {
                                                                    setFieldValue(`violations.${index}.labelTitle`, event.target.value)
                                                                }}
                                                                InputProps={{ disableUnderline: true }}
                                                                value={values.violations[index].labelTitle}
                                                            />}
                                                            <span className="more-txt" onClick={() => push(new Violation())}>Add more</span>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group calendar-col">
                                                                <DatePicker
                                                                    className={`form-control ${errors.violations && errors.violations[index] && errors.violations[index].year ? 'error' : ''}`}
                                                                    label="Year"
                                                                    views={["year"]}
                                                                    name={`violations.${index}.year`}
                                                                    onChange={(value) => {
                                                                        setFieldValue(`violations.${index}.year`, value)
                                                                    }}
                                                                    InputProps={{ disableUnderline: true }}
                                                                    value={values.violations[index].year}
                                                                    format="yyyy"
                                                                    maxDate={new Date()}

                                                                />
                                                                <span className="error-msg"><ErrorMessage name={`violations.${index}.year`} /></span>
                                                            </div>
                                                            <div className="form-group">
                                                                <TextField
                                                                    select
                                                                    className={`form-control ${errors.violations && errors.violations[index] && errors.violations[index].category ? 'error' : ''}`}
                                                                    label="Category"
                                                                    name={`violations.${index}.category`}
                                                                    onChange={handleChange}
                                                                    value={values.violations[index].category}
                                                                    InputProps={{ disableUnderline: true }}>
                                                                    {comapnies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                                <span className="error-msg"><ErrorMessage name={`violations.${index}.category`} /></span>
                                                            </div>
                                                            <div onClick={() => remove(index)} className="delete-spn">
                                                                <img alt="delete" src={cross}></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    />
                                    <div className="btn-selection">
                                        <Link onClick={(e) => {
                                            handleSubmit(e)
                                            setAddNew(true)
                                        }} className="button-transparent" to="/">Save & add another driver</Link>
                                        <Link onClick={(e) => {
                                            handleSubmit(e)
                                            setAddNew(false)
                                        }} className="button-primary" to="/car-detail">Proceed to next step</Link>
                                    </div>
                                </form>)
                        }}
                    </Formik>

                </>
            </TransitionGroup>
        </div>
    );
}

export default DriverViolations;
