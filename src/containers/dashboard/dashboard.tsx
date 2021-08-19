import { Row } from "react-styled-flexboxgrid"
import Header from '../../components/header/header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import './dashboard.css';
import seekerIcon from '../../assets/images/homepage/seeker-icon.png';
import EmptyDashboard from '../../components/dashboard/emptyDashboard';
import VehicleList from '../../components/dashboard/vehicleList';
import DriverList from '../../components/dashboard/driverList';
import AgentList from "../../components/dashboard/agentList";


interface Props {
    
}

const Dashboard = (props: Props) => {
    return (
        <div className="container">
            <div className="dashboard-container">
                <Header />
                <Row className="row">
                    <div className="dashboard-left">
                        <span className="icon-cross font-icon">
                            <span className="path2 font-icon"></span>
                        </span>
                        <div className="profile-container">
                            <img alt="Seeker icon" src={seekerIcon} />
                            <div className="profile-content">
                                <h3>Adrian Dawson</h3>
                                <p className="profile-address">76 Afhe Street,60005</p>
                            </div>
                        </div>
                        <DriverList />
                        <VehicleList />
                    </div>
                    {/* <EmptyDashboard /> */}
                    <AgentList />
                </Row>
                <OnboardingFooter />
            </div>
        </div>
    )
}

export default Dashboard