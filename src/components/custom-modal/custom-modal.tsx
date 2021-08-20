import React from 'react';
import ReactModal from 'react-modal';
import { Formik, ErrorMessage } from 'formik';

import { Link } from 'react-router-dom';
import { intitalCustomizeCoveragePlanValue } from '../../constants/formikValue';
import { customizeCoveragePlanSchema } from '../../constants/formikSchemaValidation';
import { TextField, MenuItem } from '@material-ui/core';

ReactModal.setAppElement('#root');

interface Props {
    showModal: boolean
    handleCloseModal: boolean
    planData: T,
    saveCoveragePlan: Function
}
let addNew = false;

const setAddNew = (flag) => {
    addNew = flag;
}
const options = [{label: '100$/ 250$', value: '100$/ 250$'}, {label: '200$', value: '200$'}]

const  CustomModal= (props: Props) => {
    return (
        <div>
            <ReactModal
                isOpen={props.showModal}
                className="custom-coverage-modal"
            >
                <Formik
                    initialValues={{...intitalCustomizeCoveragePlanValue, ...props.planData}}
                    validationSchema={customizeCoveragePlanSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        props.handleCloseModal()
                        props.saveCoveragePlan(values, addNew)
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
                            <div className="custom-wrap">
                                <h4>Customize your basic coverage</h4>
                                <div className="input-data">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label></label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.bodilyInjury ? '' : 'error'}`}
                                                label="Bodily Injury (BI)"
                                                name="bodilyInjury"
                                                onChange={handleChange}
                                                value={values.bodilyInjury}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="bodilyInjury" /></span>

                                        </div>
                                        <div className="form-group">
                                            <label>Property Damage</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.propertyDamage ? '' : 'error'}`}
                                                label="Property Damage"
                                                name="propertyDamage"
                                                onChange={handleChange}
                                                value={values.propertyDamage}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="propertyDamage" /></span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Unisured Motorist BI</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.unisuredMotoristBI ? '' : 'error'}`}
                                                label="Unisured Motorist BI"
                                                name="unisuredMotoristBI"
                                                onChange={handleChange}
                                                value={values.unisuredMotoristBI}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="unisuredMotoristBI" /></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Emergency Road Services</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.emergencyRoadServices ? '' : 'error'}`}
                                                label="Emergency Road Services"
                                                name="emergencyRoadServices"
                                                onChange={handleChange}
                                                value={values.emergencyRoadServices}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="emergencyRoadServices" /></span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Personal Injury Protection (PIP)</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.personalInjuryProtection ? '' : 'error'}`}
                                                label="Personal Injury Protection (PIP)"
                                                name="personalInjuryProtection"
                                                onChange={handleChange}
                                                value={values.personalInjuryProtection}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="personalInjuryProtection" /></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Comprehensive Deductible</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.comprehensiveDeductible ? '' : 'error'}`}
                                                label="Comprehensive Deductible"
                                                name="comprehensiveDeductible"
                                                onChange={handleChange}
                                                value={values.comprehensiveDeductible}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="comprehensiveDeductible" /></span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Collision Deductible</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.collisionDeductible ? '' : 'error'}`}
                                                label="Collision Deductible"
                                                name="collisionDeductible"
                                                onChange={handleChange}
                                                value={values.collisionDeductible}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="collisionDeductible" /></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Rental Car Coverage</label>
                                            <TextField
                                                select
                                                className={`form-control ${!errors.rentalCarCoverage ? '' : 'error'}`}
                                                label="Rental Car Coverage"
                                                name="rentalCarCoverage"
                                                onChange={handleChange}
                                                value={values.rentalCarCoverage}
                                                InputProps={{ disableUnderline: true }}>
                                                {options.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <span className="error-msg"><ErrorMessage name="rentalCarCoverage" /></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Unisured Motorist Property Damage</label>
                                        <TextField
                                            select
                                            className={`form-control ${!errors.unisuredMotoristPropertyDamage ? '' : 'error'}`}
                                            label="Unisured Motorist Property Damage"
                                            name="unisuredMotoristPropertyDamage"
                                            onChange={handleChange}
                                            value={values.unisuredMotoristPropertyDamage}
                                            InputProps={{ disableUnderline: true }}>
                                            {options.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <span className="error-msg"><ErrorMessage name="unisuredMotoristPropertyDamage" /></span>
                                    </div>
                                </div>
                                <div className="btn-selection">
                                    <Link onClick={(e) => {
                                        handleSubmit(e)
                                        setAddNew(true)
                                    }} className="button-primary">Save & add another vehicle</Link>
                                    <Link onClick={(e) => {
                                        handleSubmit(e)
                                        setAddNew(false)
                                    }} className="button-primary" to="/quote-success">
                                        <span className="btn-txt">Save & send request for quotes</span>
                                        <span className="icon-forward-arrow font-icon"></span>
                                    </Link>
                                </div>
                                {/* <Link onClick={handleSubmit} className="button-primary" to="/">
                                    <span className="btn-txt">Save custom & send request for quotes</span>
                                    <span className="icon-forward-arrow font-icon"></span>
                                </Link> */}
                            </div>)}
                </Formik>
                <button className="close-icon" onClick={props.handleCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
            </ReactModal>

        </div>
    );
}

export default CustomModal;

