//import Policy from '../models/policy.js';

export const DEFAULT_USERS_STATE = {}

export const DEFAULT_SELECTED_USER_STATE = {}

export const DEFAULT_NO_ACCIDENTS_CHECKBOX_STATE = {
    checked: false,
}

export const DEFAULT_ACCIDENTS_CHECKBOXES_STATE = {
    verificationChecked: false,
    noAccidents: false,
}

export const DEFAULT_EDIT_AGENT_STATE = {
    open: false
}

export const DEFAULT_SELECTED_QUESTION_STATE = {
    type: 'questions',
    attributes: {
        content: '',
        created_at: null,
        updated_at: null,
    },
    id: null,
    relationships: {
        attrs: {
            data: []
        }
    }
}

export const DEFAULT_DRAWER_STATE = {
    open: false,
    drawerType: null,
}

export const DEFAULT_CONFIRMATION_DRAWER_STATE = {
    open: false
}

export const DEFAULT_MENU_STATE = {
    open: false
}

export const DEFAULT_LOGIN_STATE = {
    loggedIn: false,
    requested: false
}

export const DEFAULT_SESSION_STATE = {
    loggedIn: false,
    requested: false
}

export const DEFAULT_RESET_PASSWORD_STATE = {
    requested: false
}

export const DEFAULT_REQUEST_PASSWORD_RESET_STATE = {
    requested: false
}

export const DEFAULT_REGISTER_STATE = {}

export const DEFAULT_CONFIRM_EMAIL_STATE = {
    confirmEmailRequested: false,
    confirmed: false,
    attributes: {
        email: ''
    }
}

export const DEFAULT_REGISTER_AGENT_STATE = {
    requested: false,
    confirmed: false,
    attributes: {
        address: '',
        address2: '',
        agent_token: '',
        city: '',
        company_id: 0,
        created_at: '',
        email: '',
        extras: null,
        family_name: '',
        free_leads: false,
        given_name: '',
        hold_leads: false,
        lat: null,
        long: null,
        pay_period_cap: null,
        phone: '',
        profile_image_url: '',
        register_url: '',
        rolse: [],
        rolse_payload: null,
        state: '',
        updated_at: '',
        zip: '',
    }
}

export const DEFAULT_QUESTIONS_STATE = {}

export const DEFAULT_MAKES_STATE = {}

export const DEFAULT_AGENT_AGREEMENT_SIGNED_STATE = {
    requested: false,
    confirmed: false,
}

export const DEFAULT_AGENT_AGREEMENT_STATE = {
    requested: false,
    confirmed: false
}

export const DEFAULT_MODELS_STATE = {
    requested: false,
    models: []
}

export const DEFAULT_STRIPE_STATE = {
    key: null
}

export const DEFAULT_QUOTES_STATE = {
    requested: false,
    quotes: [],
}

export const DEFAULT_USER_CARS_STATE = {
    requested: false,
    error: null,
    currentCar: null,
    cars: [],
}
export const DEFAULT_USER_DRIVERS_STATE = {
    requested: false,
    error: null,
    currentDriver: null,
    drivers: [],
}

export const DEFAULT_USER_QUOTES_STATE = []

export const DEFAULT_USER_RFQS_STATE = {
    requested: false,
    error: null,
    rfqs: {
        attributes: {
            token: null,
        }
    }
}

export const DEFAULT_ACCIDENTS_STATE = {
    requested: false,
    error: null,
    accidents: {}
}

export const DEFAULT_USER_ACCIDENTS_STATE = {
    requested: false,
    error: null,
    accidents: []
}

export const DEFAULT_AUXILIARY_QUESTIONS_STATE = {
    requested: false,
    error: null,
    questions: []
}

export const DEFAULT_USER_PACKAGES_STATE = {
    requested: false,
    error: null,
    packages: []
}

export const DEFAULT_USER_QUOTES_REQUEST_STATE = {
    requested: false,
    error: null,
}

export const DEFAULT_USER_PROFILE_STATE = {
    attributes: {
        email: '',
        token: null
    }
}

export const SELECTED_LEAD_DEFAULT_STATE = {
    attributes: {
        updated_at: '0',
    },
    relationships: {}
}

export const ALL_DRIVERS_LISTED_RADIO_DEFAULT_STATE = {
    selectedOption: null
}

export const FORM_PROGRESS_DEFAULT_STATE = {
    firstDriverCreated: false,
    firstCarCreated: false
}

export const TEST_USER_CARS_STATE = [
    {
        attributes: {

            id: 2238,
            image: "https://i.fuelapi.com/ade45da9738d4d2396d1e44e861c50f8/26662/1/1/stills_white_1280/MY2016/11014/11014_st1280_046.jpg",
            make: "1|BMW",
            makeDisplayName: "BMW",
            mileage: "15,000 - 20,000",
            model: "5484|i8",
            modelDisplayName: "i8",
            ownership: "owner",
            trim: "trim",
            usage: "personal",
            year: "2017",
        }
    },
    {
        attributes: {
            id: 5334,
            image: "https://i.fuelapi.com/ade45da9738d4d2396d1e44e861c50f8/24459/1/1/stills_white_1280/MY2015/9894/9894_st1280_046.jpg",
            make: "14|Honda",
            makeDisplayName: "Honda",
            mileage: "20,000 - 25,000",
            model: "4668|Civic",
            modelDisplayName: "Civic",
            ownership: "owner",
            trim: "trim",
            usage: "personal",
            year: "2015",
        }
    }
]

export const TEST_USER_DRIVERS_STATE = [
    {
        attributes: {

            address: "6981 Rolf Ct. Portland, OR",
            birthdate: "1591-02-05",
            creditScore: "650",
            currentInsurance: "stateFarm",
            driver_is_employed: "",
            driver_licensed_recently: "",
            driver_owns_property_on_address: "",
            email: "hbcumben@fmail.com",
            full_time_student: "",
            incidentDetails: "incidentDetails",
            incidentType: "incidentType",
            incidents: [],
            licenseNumber: "93710293",
            license_state_matches_current_state: "",
            lived_at_address_more_than_one_year: "",
            name: "Hopsmack Cumben",
            primaryVehicle: "2238|2017|BMW|i8",
            state: "OR",
        }
    },
    {
        attributes: {

            address: "6981 Rolf Ct. Portland, OR",
            birthdate: "1591-02-06",
            creditScore: "800",
            currentInsurance: "stateFarm",
            driver_is_employed: "",
            driver_licensed_recently: "",
            driver_owns_property_on_address: "",
            email: "bbcumben@fmail.com",
            full_time_student: "",
            incidentDetails: "incidentDetails",
            incidentType: "incidentType",
            incidents: [],
            licenseNumber: "93710293",
            license_state_matches_current_state: "",
            lived_at_address_more_than_one_year: "",
            name: "Bobsmack Cumben",
            primaryVehicle: "5334|2015|Honda|Civic",
            state: "OR",
        }
    }
]

export const TEST_AGENTS_STATE = [
    {
        name: "Mary Debras",
        profile_image: "https://hughandersonphotography.com/wp-content/uploads/2017/02/headshots-detroit-hugh-anderson-photography-012-1.jpg",
        location: "Portland, Within 5 Miles",
        rating: 4.2,
        trait1: ["claim_satisfaction", "Best"],
        trait2: ["proximity", "Great"],
        company: 'allstate',
        processed_at: '',
        price: '133',
        top_match: true,
        top_value: false,

    },
    {
        name: "Andy Orsow",
        profile_image: "https://static1.squarespace.com/static/54693b1ee4b07c8a3da7b6d0/58df54aa1b10e31ed44dab4b/58df54ab6b8f5b410f59d285/1491031900534/Leap-Systems-2016-Headshots-By-Lamonte-G-Photography-IMG_1871-Edit.jpg?format=500w",
        location: "Beaverton, Within 10 Miles",
        rating: 4.5,
        trait1: ["company_rating", "Great"],
        trait2: ["price", "Great"],
        company: 'liberty_mutual',
        processed_at: '',
        price: '142',
        top_match: false,
        top_value: false,

    },
    {
        name: "Kevin Wayne",
        profile_image: "http://ignite-images.co.uk/wp-content/uploads/2014/02/5DDD0318.png",
        location: "Portland, Within 2 Miles",
        rating: 4.4,
        trait1: ["claim_satisfaction", "Great"],
        trait2: ["proximity", "Great"],
        company: 'state_farm',
        processed_at: '8/1/2017 @ 9:07PM',
        price: '177',
        top_match: false,
        top_value: false,

    },
    {
        name: "Kerry Lee",
        profile_image: "http://delmarphotographics.com/wp-content/uploads/2017/06/linkedin-headshots-delmarphotographics-858-461-9909.jpg",
        location: "Clackamas, Within 10 Miles",
        rating: 3.5,
        trait1: ["price", "Best"],
        trait2: ["claim_satisfaction", "Good"],
        company: 'progressive',
        processed_at: '',
        price: '103',
        top_match: false,
        top_value: false,

    },
    {
        name: "Jerry Chan",
        profile_image: "http://www.photographer-neworleans.com/corporate-headshots/corporate_headshots_neworleans01a.JPG",
        location: "Portland, Within 5 Miles",
        rating: 4.4,
        trait1: ["company_rating", "Great"],
        trait2: ["price", "Great"],
        company: 'aaa',
        processed_at: '',
        price: '89',
        top_match: false,
        top_value: true,

    },
    {
        name: "Deb Baringus",
        profile_image: "https://pencheffphoto.com/wp-content/uploads/2017/02/015-Headshots(pp_w500_h500).jpg",
        location: "Portland, Within 10 Miles",
        rating: 4.1,
        trait1: ["claim_satisfaction", "Good"],
        trait2: ["price", "Great"],
        company: 'geico',
        processed_at: '',
        price: '192',
        top_match: false,
        top_value: false,

    },
    {
        name: "Chad Morton",
        profile_image: "https://pbs.twimg.com/media/Cn2olMzWgAAAJgP.jpg",
        location: "Clackamas, Within 10 Miles",
        rating: 3.9,
        trait1: ["proximity", "Great"],
        trait2: ["claim_satisfaction", "Great"],
        company: 'metlife',
        processed_at: '8/2/2017 @ 3:03PM',
        price: '133',
        top_match: false,
        top_value: false,

    },
    {
        name: "Courtney Barnett",
        profile_image: "https://static1.squarespace.com/static/582aa759cd0f68850be83efa/5885c573d2b857134e46dc38/5885cbcd3e00beae85e4b164/1485163470388/OshkoshHeadshotPhotographer-HillaryQuella-38.jpg?format=500w",
        location: "Beaverton, Within 5 Miles",
        rating: 4.7,
        trait1: ["company_rating", "Great"],
        trait2: ["proximity", "Good"],
        company: '21st_century',
        processed_at: '',
        price: '133',
        top_match: false,
        top_value: false,

    },
    {
        name: "Poloma Beignet",
        profile_image: "http://www.lemlynchheadshots.com/wp-content/uploads/2016/11/llp_hs_01_th.jpg",
        location: "Clackamas, Within 10 Miles",
        rating: 3.2,
        trait1: ["claim_satisfaction", "Good"],
        trait2: ["proximity", "Good"],
        company: 'usaa',
        processed_at: '',
        price: '133',
        top_match: false,
        top_value: false,

    },
]
