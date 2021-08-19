import emptyImage from '../../../src/assets/images/homepage/empty.png';

interface Props {

}

const EmptyDashboard = (props: Props) => {
    return (
        <div className="dashboard-right">
            <div className="empty-container">{/* show when nothing on Dashboard and remove "d-none" class*/}
                <div className="empty-container-inner">
                    <img alt="Empty icon" src={emptyImage} className="empty-image" />
                    <h2>Welcome!</h2>
                    <p>We are in the process of curating the top agents for you. we will get back to you soon.</p>
                    <p className="extract">&mdash; Team Seekr</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyDashboard
