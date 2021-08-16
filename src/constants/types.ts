export interface Driver {
    firstName: string,
    lastName: string,
    licenseNumber: string,
    dateOfBirth: null,
    gender: string,
    insuranceCompany: string,
    state: string,
}


export interface Vehicle {
    year: string,
    make: string,
    model: string,
    mileage: string,
    driver: string,
    ownership: string,
}