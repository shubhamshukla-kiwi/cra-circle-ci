import React, { Component } from 'react';

import './agent-detail.css';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import agentImg from '../../assets/images/homepage/signup-1.png';
import stepsLine from '../../assets/images/homepage/steps-line.svg';
import whiteLogo from '../../assets/images/homepage/seekr-logo-white.png';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class AgentPreferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTooltip: true,
            items: [{ id: '1', content: 'Claim Satisfaction' },
            { id: '2', content: 'Agent Rating' },
            { id: '3', content: 'Price' },
            { id: '4', content: 'Proximity' },
            { id: '5', content: 'Company Rating' }]
        };
    }

    onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
        this.setState({
            items
        });
    }

    render() {
        return (
            <div className="agent-detail-dashboard-inner">
                <div className="header-container-row">
                    <img src={agentImg} alt="icon"></img>
                    <h4>
                        set your preferences as per priority
                    </h4>
                    <p className="detail-text">
                        We use your preferences to filter through thousands of agents and insurers so that only the best matched ones will receive your information.
                    </p>
                    <h6>
                        <span className="note-text">*</span>
                        Use drag & drop to change the order
                    </h6>
                </div>
                <div className="data-container">
                    <div className="left-content">
                        <h6>highest to least priority</h6>
                        <img src={stepsLine} alt="steps-line"></img>
                    </div>
                    <div className="right-content">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {this.state.items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div className="order-listing"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {item.content}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>

                    </div>
                </div>
                <Link className="button-primary" to="/driver-detail">Next</Link>
                {this.state.showTooltip &&
                    <div className="welcome-msg">
                        <div className="msg-txt">
                            <img src={whiteLogo} alt="logo"></img>
                            <p>
                                <span>Hi Adrian!</span>
                            Your Seekr account is now verified. complete your on-boarding in 3
                            simple steps, send us a request and we will find you the suitable quotes.
                        </p>
                        </div>
                        <button className="btn-transparent" onClick={() => {
                            this.setState({ showTooltip: false })
                        }}>Ok, Got it</button>
                    </div>
                }
            </div>
        );
    }
}

export default AgentPreferences;
