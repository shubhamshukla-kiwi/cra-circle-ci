import React, {Component} from 'react';

import {connect} from 'react-redux';
import './customer-dashboard-policies.css';
import NewCar from '../new-car/new-car.js';

class CustomerDashboardPolicies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <div className="customer-dashboard-policies">
                <div className="details-container">
                    <NewCar readOnly={true}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginRequested: state.login.loginRequested,
        loggedIn: state.login.loggedIn,
        quotes: state.rfqs
    }
}

export default connect(mapStateToProps)(CustomerDashboardPolicies);