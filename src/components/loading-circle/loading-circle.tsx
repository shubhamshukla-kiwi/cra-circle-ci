import React, {Component} from 'react';


import './loading-circle.css';

class LoadingCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

    }

    render() {
        const size = this.props.size || "50px";
        const style = {
            height: size,
            width: size
        };
        return (
            <div
                className="loading-circle"
                style={style}
            >
                <div className="dot"/>
            </div>
        )
    }
}

export default LoadingCircle
