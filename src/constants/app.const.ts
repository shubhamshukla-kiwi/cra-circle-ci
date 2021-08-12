import * as Yup from 'yup';
import { checkIfFilesAreCorrectType, checkIfFilesAreTooBig} from './app.method';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required')
      .matches(
        /^[a-zA-Z0-9]*$/,
        'Only alphanumeric characters are allowed'
      ),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required')
      .matches(
        /^[a-zA-Z0-9]*$/,
        'Only alphanumeric characters are allowed'
      ),  
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    address: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required')
      .matches(
        /^[a-zA-Z0-9]*$/,
        'Only alphanumeric characters are allowed'
      ),
    state: Yup.string()
      .required('Required'),
    city: Yup.string()
      .required('Required'),  
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
         .required('Required')
         .test('is-correct-file', 'file size is big', checkIfFilesAreTooBig)
         .test(
           'is-big-file',
           'wrong type file',
           checkIfFilesAreCorrectType
         ),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),  
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required')
    .matches(
      /^[a-zA-Z0-9]*$/,
      'Only alphanumeric characters are allowed'
    ),
  bio: Yup.string()
  .min(2, 'Too Short!')
  .max(70, 'Too Long!')
  .required('Required')
  .matches(
    /^[a-zA-Z0-9]*$/,
    'Only alphanumeric characters are allowed'
  ),
  phone: Yup.string()
  .required('Required')
  .matches(
    /^[a-zA-Z0-9]*$/,
    'Only alphanumeric characters are allowed'
  ),
  zipcode: Yup.string()
  .required('Required')
  .matches(
    /^[a-zA-Z0-9]*$/,
    'Only alphanumeric characters are allowed'
  ),  
  state: Yup.string()
    .required('Required'),
  city: Yup.string()
    .required('Required'),
  company: Yup.string()
  .required('Required'),    
  termsCheckbox: Yup.boolean()
  .oneOf([true], 'Please accept terms and condition')
});