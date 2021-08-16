import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import AgentPreferences from './agent-preferences';
import './agent-detail.css';


class AgentDetail extends Component {
  render() {
    return (
      <div className="detail-dashboard">
        <TransitionGroup
          className="agent-detail-transition-group"
        >
          <AgentPreferences />
        </TransitionGroup>
      </div>
    );
  }
}

export default AgentDetail;
