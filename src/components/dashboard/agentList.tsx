import React from 'react'
import AgentSlider from '../agent-slider/agent-slider'

interface Props {

}

const AgentList = (props: Props) => {
    return (
    <div className="dashboard-right">
        <div className="dashboard-heading">Hello Seekr!</div>
        <div className="dashboard-sub-heading">Based on your information, we have listed 5 best quotes for you that match your criteria well. Find the quote you like and you can contact us through a call, email or send us a message.</div>
        <AgentSlider />
    </div>)
}

export default AgentList
