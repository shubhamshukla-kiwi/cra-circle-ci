import { useState, useEffect } from 'react';
import DriverDetail from '../driver-detail'
import MoreDriverDetail from '../more-driver-detail';
import DriverViolations from '../driver-violations';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { saveDriver, editDriver } from '../../../actions/onboarding/driver.action';
import { useHistory } from 'react-router-dom';

interface Props {
    dispatch: Dispatch,
    passedData: T
}
let naviagteFlag = false;
let enableSetData = false;

const AddDriver = (props: Props) => {
    let [driverInfo, setDriverInfo] = useState(null);
    let [driverDetail, setDriverDetail] = useState(null);
    let [driverViolations, setDriverViolations] = useState(null);
    let [index, setIndex] = useState(null);
    const history = useHistory();
    let [steps, setSteps] = useState(1)
    useEffect(() => {
        if (driverViolations && enableSetData) {
            const data = { driverInfo, driverDetail, driverViolations };
            if(index !== null) {
                const editData = {data: data, index: index}
                props.dispatch(editDriver(editData));
            } else {
                props.dispatch(saveDriver(data));
            }
            setDriverInfo(null);
            setDriverDetail(null);
            setDriverViolations(null);
            setIndex(null);
            enableSetData = false;
            if (naviagteFlag) {
                setSteps(1);
                window.scrollTo(0, 0)
            } else {
                history.push('/new-quote/vehicles')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [driverViolations, enableSetData]);


    useEffect(() => {
        if (props.passedData && props.passedData.driverInfo && props.passedData.index !== null) {
            enableSetData = false;
            setDriverInfo(props.passedData.driverInfo);
            setDriverDetail(props.passedData.driverDetail);
            setDriverViolations(props.passedData.driverViolations);
            setSteps(1);
            setIndex(props.passedData.index);
            setSteps(1);
        }
    }, [props.passedData]);

    const saveDriverInfo = (driver) => {
        setDriverInfo(driver);
        setSteps(steps + 1);
        window.scrollTo(0, 0);
    }
    const saveDriverDetail = (detail) => {
        setDriverDetail(detail);
        setSteps(steps + 1);
        window.scrollTo(0, 0);
    }
    const saveDriverViolations = (violations, newFlag) => {
        setDriverViolations(violations);
        naviagteFlag = newFlag;
        enableSetData = true;
    }
    const prevState = () => {
        setSteps(steps - 1)
    }
    return (
        <>
            {steps === 1 && <DriverDetail index={index} driver={driverInfo} saveDriverInfo={saveDriverInfo} />}
            {steps === 2 && <MoreDriverDetail index={index} driverDetail={driverDetail} prevState={prevState} driver={driverInfo} saveDriverDetail={saveDriverDetail} />}
            {steps === 3 && <DriverViolations index={index} driverViolations={driverViolations} prevState={prevState} driver={driverInfo} saveDriverViolations={saveDriverViolations} />}
        </>
    )
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps)(AddDriver)
