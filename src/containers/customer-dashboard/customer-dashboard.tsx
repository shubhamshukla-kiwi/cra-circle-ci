import React, {Component} from 'react';
import {connect} from 'react-redux';
import './customer-dashboard.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import CustomerDashboardMain from '../customer-dashboard-main/customer-dashboard-main.js'
import CustomerDashboardPolicies from '../customer-dashboard-policies/customer-dashboard-policies.js'

class CustomerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        const currentKey = this.props.location.pathname.split('/')[2] || '/'

        return (
            <div className="customer-dashboard">
                <TransitionGroup className="dashboard-transition-group">
                    <CSSTransition key={currentKey} timeout={1000} classNames="fade" appear>
                        <div className="switch-container">
                            <Switch location={this.props.location}>
                                <Route path={`/dashboard`} exact component={CustomerDashboardMain}/>
                                <Route path={`/dashboard/quotes`} component={CustomerDashboardMain}/>
                                {/* <Route path={`/dashboard/policies`} component={CustomerDashboardPolicies}/> */}
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginRequested: state.login.loginRequested,
        loggedIn: state.login.loggedIn
    }
}

export default withRouter(connect(mapStateToProps)(CustomerDashboard))
