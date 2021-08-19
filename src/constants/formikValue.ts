export const initialAddDriverInfoValue = {
    firstName: '',
    lastName: '',
    licenseNumber: '',
    dateOfBirth: null,
    gender: '',
    insuranceCompany: '',
    state: '',
  }

export const initialAddVehicleInfoValue = {
  year: null,
  make: '',
  model: '',
  mileage: '',
  driver: '',
  ownership: '',
};  


export const initialAgentSignupValue = {
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
  termsCheckbox: false,
  licneseNumber: ''
};

export const initialLoginValue = {
  email: ''
};

export const initialOTPValue = {
  field1: '',
  field2: '',
  field3: '',
  field4: '',
  field5: '',
  field6: '',
};

export const initialSignupValue = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  state: '',
  city: '',
  termsCheckbox: false
}

export const initialDriverDetailValues = {
  driverDetail: [
      {
          answer: '',
          metaAnswer: '',
          metaAnswerSelect: '',
      },
      {
          answer: '',
          metaAnswer: '',
          metaAnswerSelect: '',
      },
      {
          answer: '',
          metaAnswer: '',
          metaAnswerSelect: '',
      }
  ]
}

export const intitalCustomizeCoveragePlanValue = {
  id: '',
  planName: '', 
  bodilyInjury: '',
  propertyDamage: '',
  unisuredMotoristBI: '',
  unisuredMotoristPropertyDamage: '',
  personalInjuryProtection: '',
  comprehensiveDeductible: '',
  collisionDeductible: '',
  rentalCarCoverage: '',
  emergencyRoadServices: ''
}

export const initialDriverViolationValues = {
  noViolation: '',
  violations: [{
      addNew: false,
      labelTitle: 'Mention any accident occured',
      category: '',
      year: null
  }, {
      addNew: false,
      labelTitle: 'Has there been a violation?',
      category: '',
      year: null
  }, {
      addNew: false,
      labelTitle: 'Any other incident?',
      category: '',
      year: null
  },]
}