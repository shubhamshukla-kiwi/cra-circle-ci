import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import './oops.css';
import LogoIcon from '../../components/svgs/logo-icon';

class Oops extends Component {
    render() {
        return (
            <div className="oops">
                {/* <Header/> */}
                <div className="scroll-container">
                    <div className="oops-content">
                        <div className="oops-message">
                            <LogoIcon className="seeker-logo"/>
                            <h1>404</h1>
                        </div>
                        <Link className="home-button" to="/">
                            <button className="button-secondary">
                                Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Oops;
