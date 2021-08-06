import { getItemLocalStorage, setFormatDriver } from '../../helpers';

export const types = {
  SET_ZIP: 'SET_ZIP',
  SET_CREATED_DRIVER: 'SET_CREATED_DRIVER',
  SET_DRIVER_ID: 'SET_DRIVER_ID',
  SET_RFQS: 'SET_RFQS',
  SET_RFQS_ID: 'SET_RFQS_ID',
  SET_UPDATE_RFQS: 'SET_UPDATE_RFQS',
  SET_ANSWER: 'SET_ANSWER',
  SET_BRANDS: 'SET_BRANDS',
  SET_MODELS: 'SET_MODELS',
  SET_VEHICLE: 'SET_VEHICLE',
  SET_VEHICLE_ID: 'SET_VEHICLE_ID',
  SET_ACCIDENT: 'SET_ACCIDENT',
  SET_PACKAGES: 'SET_PACKAGES',
  SET_CURRENT_PACKAGE: 'SET_CURRENT_PACKAGE',
  SET_NEW_PACKAGE: 'SET_NEW_PACKAGE',
  SET_ANSWERS: 'SET_ANSWERS'
};

export const initialState = {
  zip: {},
  driver: {},
  drivers: [],
  rfqs: {},
  token: '',
  driverId: '',
  answers: [],
  localAnswers: [],
  brands: [],
  models: [],
  vehicle: {},
  vehicles: [],
  vehicleId: '',
  accidents: [],
  packages: [],
  currentPackage: {},
  newPackage: {}
};

export const driversReducer = (state, action) => {
  return action.type === types.SET_ZIP
    ? { ...state, zip: Object.assign({}, action.payload) }
    : action.type === types.SET_RFQS
    ? { ...state, rfqs: Object.assign({}, action.payload), token: action.payload.token } 
    : action.type === types.SET_RFQS_ID
    ? { ...state, rfqsId: action.payload } 
    : action.type === types.SET_UPDATE_RFQS
    ? { ...state, rfqs: Object.assign({}, action.payload) }
    : action.type === types.SET_CREATED_DRIVER
    ? { 
      ...state,
      driver: Object.assign({}, action.payload),
      drivers: [ ...state.drivers, action.payload ]
    }
    : action.type === types.SET_DRIVER_ID
    ? { ...state, driverId: action.payload }
    : action.type === types.SET_ANSWER
    ? { ...state, answers: [ ...state.answers, action.payload ] }
    : action.type === types.SET_ANSWERS
    ? { ...state, localAnswers: action.payload }
    : action.type === types.SET_BRANDS
    ? { ...state, brands: action.payload }
    : action.type === types.SET_MODELS
    ? { ...state, models: action.payload }
    : action.type === types.SET_PACKAGES
    ? { ...state, packages: action.payload }
    : action.type === types.SET_VEHICLE
    ? {
      ...state,
      vehicle: Object.assign({}, action.payload),
      vehicles: [ ...state.vehicles, action.payload ]
    }
    : action.type === types.SET_VEHICLE_ID
    ? {
      ...state,
      vehicleId: action.payload,
    }
    : action.type === types.SET_ACCIDENT
    ? { ...state, accidents: [ ...state.accidents, action.payload ] }
    : action.type === types.SET_CURRENT_PACKAGE
    ? { ...state, currentPackage: Object.assign({}, action.payload) }
    : action.type === types.SET_NEW_PACKAGE
    ? { ...state, newPackage: Object.assign({}, action.payload) }
    : state;
};
