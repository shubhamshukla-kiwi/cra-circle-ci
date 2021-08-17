import * as Yup from 'yup';
import { checkIfFilesAreCorrectType, checkIfFilesAreTooBig } from './app.method';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  lastName: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  email: Yup.string()
    .email('Invalid!')
    .required('Mandatory!'),
  address: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  state: Yup.string()
    .required('Mandatory!'),
  city: Yup.string()
    .required('Mandatory!'),
  termsCheckbox: Yup.boolean()
    .oneOf([true], 'Please accept terms and condition')
});


export const otpValidationSchema = Yup.object().shape({
  field1: Yup.number()
    .required(),
  field2: Yup.number()
    .required(),
  field3: Yup.number()
    .required(),
  field4: Yup.number()
    .required(),
  field5: Yup.number()
    .required(),
  field6: Yup.number()
    .required(),
});


export const agentSignupSchema = Yup.object().shape({
  file: Yup.mixed()
    .required('Mandatory!')
    .test('is-correct-file', 'file size is big', checkIfFilesAreTooBig)
    .test(
      'is-big-file',
      'wrong type file',
      checkIfFilesAreCorrectType
    ),
  firstName: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  lastName: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  email: Yup.string()
    .email('Invalid!')
    .required('Mandatory!'),
  address: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  bio: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  phone: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  zipcode: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  state: Yup.string()
    .required('Mandatory!'),
  city: Yup.string()
    .required('Mandatory!'),
  company: Yup.string()
    .required('Mandatory!'),
  termsCheckbox: Yup.boolean()
    .oneOf([true], 'Please accept terms and condition')
});

export const OTPLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid!')
    .required('Mandatory!'),
});

export const addDriverInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  lastName: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  licenseNumber: Yup.string()
    .required('Mandatory!')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  dateOfBirth: Yup.date()
    .nullable()
    .required('Mandatory!'),
  state: Yup.string()
    .required('Mandatory!'),
  gender: Yup.string()
    .required('Mandatory!'),
  insuranceCompany: Yup.string()
    .required('Mandatory!'),
});


export const addVehicleInfoSchema = Yup.object().shape({
  year: Yup.string()
    .required('Mandatory!'),
  make: Yup.string()
    .required('Mandatory!'),
  model: Yup.string()
    .required('Mandatory!'),
  mileage: Yup.string()
    .required('Mandatory!'),
  driver: Yup.string()
    .required('Mandatory!'),
  ownership: Yup.string()
    .required('Mandatory!'),  
});
