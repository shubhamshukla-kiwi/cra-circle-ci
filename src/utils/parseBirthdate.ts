import moment from 'moment';

export default (value, defaultFormat, diffIn = 'years') => {
  const parsedDate = moment(value, defaultFormat);
  const today = moment();
  const diff = today.diff(parsedDate, diffIn);
  return {
    current: parsedDate.toDate(),
    isValid: parsedDate.isValid(),
    today: today.toDate(),
    diff,
    diffIn
  };
};