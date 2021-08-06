import React, {Component} from 'react';


import './loading.css';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

    }

    render() {


        return (
            <div className="splash">
                <h1>Loading</h1>
            </div>
        )
    }
}

export default Loading
