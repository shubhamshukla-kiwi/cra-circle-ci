export const genderList = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    }
  ];

export const states = [
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


  export const questionAnswerList = [
    {
        question: 'Has the driver lived at the current address for less than 1 year?',
        helperText: '',
        text: true,
        textLabel: 'If so, what was the previous address?',
        answer: null,
        metaAnswer: '',
        metaAnswerSelect: null,
        options: []
    },
    {
        question: 'Did the driver obtain their license in the last 3 years?',
        helperText: '',
        text: true,
        textLabel: 'If so, what was the previous address?',
        answer: null,
        metaAnswer: '',
        metaAnswerSelect: null,
        options: []
    },
    {
        question: 'Profession, Student, or Veteran Discounts?',
        helperText: 'Some insurance companies offer discounts to student, veterans, and some professions.',
        text: false,
        options: ['22', '23', '234', '56'],
        optionLabel: 'If yes, at what age?',
        answer: null,
        metaAnswerSelect: null,
        metaAnswer: ''
    }
]  

export const comapnies = [
    {
        value: 'CA',
        image: 'https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/24/twitter-icon.png',
        label: 'CA',
    },
    {
        value: 'AUS',
        image: 'https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/24/twitter-icon.png',
        label: 'AUS',
    }
];


export const coveragePlans = [
  {
      id: 1,
      planName: 'Basic', bodilyInjury: '200$',
      propertyDamage: '200$',
      unisuredMotoristBI: '200$',
      unisuredMotoristPropertyDamage: '200$',
      personalInjuryProtection: '200$',
      comprehensiveDeductible: '200$',
      collisionDeductible: '200$',
      rentalCarCoverage: '200$',
      emergencyRoadServices: '200$'
  },
  {
      id: 2,
      planName: 'Premium', bodilyInjury: '200$',
      propertyDamage: '200$',
      unisuredMotoristBI: '200$',
      unisuredMotoristPropertyDamage: '200$',
      personalInjuryProtection: '200$',
      comprehensiveDeductible: '200$',
      collisionDeductible: '200$',
      rentalCarCoverage: '200$',
      emergencyRoadServices: '200$'
  },
  {
      id: 3,
      planName: 'Best', bodilyInjury: '200$',
      propertyDamage: '200$',
      unisuredMotoristBI: '200$',
      unisuredMotoristPropertyDamage: '200$',
      personalInjuryProtection: '200$',
      comprehensiveDeductible: '200$',
      collisionDeductible: '200$',
      rentalCarCoverage: '200$',
      emergencyRoadServices: '200$'
  }];