import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import './driver-detail.css';
import { TextField, MenuItem } from '@material-ui/core';
import { moreDriverDetailValidationSchema } from '../../constants/formikSchemaValidation';
import { initialDriverDetailValues } from '../../constants/formikValue';
import { Driver } from '../../constants/types';
import { questionAnswerList } from '../../constants/app.const';

interface Props {
    saveDriverDetail: Function,
    driver: Driver,
    prevState: Function,
    driverDetail: T
}



export const MoreDriverDetail = (props: Props) => {
    return (
        <div className="detail-dashboard moredriver-details-wrapper">
            <TransitionGroup className="driver-detail-transition-group">
                <>
                    <div className="header-container-row">
                        <span onClick={props.prevState} className="icon-back-arrow font-icon"></span>
                        <h4>tell us a bit more about {props.driver && props.driver.firstName} {props.driver && props.driver.lastName}!</h4>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{ ...initialDriverDetailValues, ...props.driverDetail }}
                        validationSchema={moreDriverDetailValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            props.saveDriverDetail(values);
                        }}>
                        {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => {
                            return (<form>
                                <FieldArray
                                    name="driverDetail"
                                    render={({ insert, remove, push }) => (
                                        <>
                                            {values.driverDetail.map((item, index) => (
                                                <div className="detail-list"
                                                    key={index}>
                                                    <h4>{questionAnswerList[index].question}</h4>
                                                    {questionAnswerList[index].helperText && <h6>{questionAnswerList[index].helperText}</h6>}
                                                    <div className="select-data">
                                                        <div className="form-group custom-radio-btn">
                                                            <input
                                                                type="radio"
                                                                id={`driverDetail.${index}-yes`}
                                                                value='Yes'
                                                                name={`driverDetail.${index}.answer`}
                                                                onChange={handleChange}
                                                                checked={values.driverDetail[index].answer === 'Yes'}
                                                            />
                                                            <label htmlFor={`driverDetail.${index}-yes`}>Yes</label>
                                                        </div>

                                                        <div className="form-group custom-radio-btn">
                                                            <input
                                                                id={`driverDetail.${index}-no`}
                                                                type="radio"
                                                                onChange={handleChange}
                                                                value='No'
                                                                name={`driverDetail.${index}.answer`}
                                                                checked={values.driverDetail[index].answer === 'No'}
                                                            />
                                                            <label htmlFor={`driverDetail.${index}-no`}>No</label>
                                                        </div>
                                                    </div>
                                                    <span className="error-msg"><ErrorMessage name={`driverDetail.${index}.answer`} /></span>
                                                    {questionAnswerList[index].text && <div className="form-group">
                                                        <TextField
                                                            type="text"
                                                            name={`driverDetail.${index}.metaAnswer`}
                                                            className={`form-control`}
                                                            onChange={handleChange}
                                                            InputProps={{ disableUnderline: true }}
                                                            label={questionAnswerList[index].textLabel}
                                                        />
                                                    </div>}
                                                    {!questionAnswerList[index].text && <div className="form-group">
                                                        <label>{questionAnswerList[index].optionLabel}</label>
                                                        <TextField
                                                            select
                                                            defaultValue=""
                                                            name={`driverDetail.${index}.metaAnswerSelect`}
                                                            onChange={handleChange}
                                                            InputProps={{ disableUnderline: true }}>
                                                            {questionAnswerList[index].options.map((option) => (
                                                                <MenuItem key={option} value={option}>
                                                                    {option}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                        <span className="error-msg"><ErrorMessage name={`driverDetail.${index}.metaAnswerSelect`} /></span>
                                                    </div>}
                                                </div>
                                            ))}</>)}
                                />
                                <Link onClick={handleSubmit} className="button-primary" to="/more-driver-detail-a">Next</Link>
                            </form>)
                        }}
                    </Formik>
                </>
            </TransitionGroup>
        </div>
    );
}

export default MoreDriverDetail;
