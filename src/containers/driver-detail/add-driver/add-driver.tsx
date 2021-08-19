import { useState } from 'react';
import DriverDetail  from '../driver-detail'
import MoreDriverDetail from '../more-driver-detail';
import DriverViolations from '../driver-violations';
import OnboardHeader from '../../../components/onboard-header/onboard-header';
import TabNavigator from '../../../components/tab-navigator/tab-navigator';
import OnboardingFooter from '../../../components/onboarding-footer/onboarding-footer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { saveDriver } from '../../../actions/onboarding/driver.action';
import { useHistory } from 'react-router-dom';

interface Props {
    dispatch: Dispatch
}

const AddDriver = (props: Props) => {
    let [driverInfo, setDriverInfo] = useState(null);
    let [driverDetail, setDriverDetail] = useState(null);
    let [driverViolations, setDriverViolations] = useState(null);
    const history = useHistory();
    let [steps, setSteps] = useState(1)
    const saveDriverInfo = (driver) => {
        setDriverInfo(driver);
        setSteps(steps+1);
        window.scrollTo(0, 0);
    }
    const saveDriverDetail = (detail) => {
        setDriverDetail(detail);
        setSteps(steps+1);
        window.scrollTo(0, 0);
    }
    const saveDriverViolations = (violations, newFlag) => {
        setDriverViolations(violations);
        const data = { driverInfo, driverDetail, driverViolations}
        props.dispatch(saveDriver(data));
        setDriverInfo(null);
        setDriverDetail(null);
        setDriverViolations(null);
        if(newFlag) {
            setSteps(1);
            window.scrollTo(0, 0)
        } else {
            history.push('/new-quote/vehicles')
        }
    }
    const prevState = () => {
        setSteps(steps -1)
    }
    return (
        <div className="driver-detail-dashboard">
      <div className="new-car-container">
        <div className="onboard-container">
          <OnboardHeader />
          <div className="navigation-section">
            <TabNavigator />
            {steps === 1 && <DriverDetail driver={driverInfo}  saveDriverInfo={saveDriverInfo} />}
            {steps === 2 && <MoreDriverDetail driverDetail={driverDetail} prevState={prevState} driver={driverInfo} saveDriverDetail={saveDriverDetail} />}
            {steps === 3 && <DriverViolations driverViolations={driverViolations} prevState={prevState} driver={driverInfo} saveDriverViolations={saveDriverViolations} />}
        </div>
        <OnboardingFooter />
      </div>
    </div>
    </div>
    )
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps)(AddDriver)
