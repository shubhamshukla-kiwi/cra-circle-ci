import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import {
  postAuxiliaryQuestionsRequest,
  updateAuxiliaryQuestionsRequest,
} from '../../actions/questions.js';
import ConditionalLink from '../../components/conditional-link/conditional-link.js';
import CustomSelect from '../../components/custom-select/custom-select.js';
import Rfq from '../../lib/models/quote';

import './driver-detail.css';
class DriverDetailB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledButton: true,
      primary_answers: [],
    };
    this.updateStateAuxiliaryQuestionAnswers(this.props);
    this.getDisabledButton();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.state.primary_answers.length !==
      this.props.auxiliary_question_info.questions.length
    ) {
      this.updateStateAuxiliaryQuestionAnswers(nextProps);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.primary_answers.length &&
      this.state.disabledButton === true
    ) {
      this.getDisabledButton();
    }
  }

  componentDidMount() {
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  componentWillUnmount() {
    this.state.primary_answers.map((answer, index) => {
      if (this.props.fieldsEditable) {
        if (answer.data.attributes.answer !== null) {
          if (answer.data.id) {
            this.props.dispatch(
              updateAuxiliaryQuestionsRequest({
                rfq_token: this.props.rfq_token,
                rfq_driver_id: answer.data.attributes.rfq_driver_id,
                auxiliary_question_id:
                  answer.data.attributes.auxiliary_question_id,
                answer: answer.data.attributes.answer,
                answer_id: answer.data.id,
                description: answer.data.attributes.description,
              })
            );
          } else {
            setTimeout(() => {
              this.props.dispatch(
                postAuxiliaryQuestionsRequest({
                  rfq_token: this.props.rfq_token,
                  rfq_driver_id: answer.data.attributes.rfq_driver_id,
                  auxiliary_question_id:
                    answer.data.attributes.auxiliary_question_id,
                  answer: answer.data.attributes.answer,
                  description: answer.data.attributes.description,
                })
              );
            }, index * 500);
          }
        } else if (answer.data.attributes.answer === null) {
        }
      }
    });
  }

  getDisabledButton() {
    const result = this.state.primary_answers.filter(
      (answer) => answer.data.attributes.answer !== null
    );
    if (result.length === 3) {
      this.setState({ disabledButton: false });
    }
  }

  updateStateAuxiliaryQuestionAnswers(props) {
    var new_primary_answers = props.auxiliary_question_info.questions.map(
      (question) => {
        return (
          props.questions.questions.find(
            (iquestion) =>
              parseInt(iquestion.data.attributes.auxiliary_question_id, 10) ===
                parseInt(question.id, 10) &&
              parseInt(iquestion.data.attributes.rfq_driver_id, 10) ===
                parseInt(props.drivers[this.props.currentDriver].data.id, 10)
          ) ||
          Object.assign({
            data: {
              attributes: {
                answer: null,
                auxiliary_question_id: question.id,
                rfq_driver_id: props.drivers[this.props.currentDriver].data.id,
              },
            },
          })
        );
      }
    );

    this.setState({ primary_answers: new_primary_answers });
  }

  handleUpdateQuestionAnswer(index, answer) {
    var newAnswers = _.cloneDeep(this.state.primary_answers);
    newAnswers[index].data.attributes.answer = answer;
    this.setState({ primary_answers: newAnswers });
  }

  handleSecondaryAnswerChange(e, index) {
    var newAnswers = _.cloneDeep(this.state.primary_answers);
    newAnswers[index].data.attributes.description = e.target.value;
    this.setState({ primary_answers: newAnswers });
  }

  ages() {
    var ages = [];
    for (var i = 16; i < 100; i++) {
      ages.push(<option value={i.toString()}>{i.toString()}</option>);
    }
    return ages;
  }

  button(question, index) {
    const answer = this.state.primary_answers[index];
    var status;
    if (answer && answer.data) {
      status = answer.data.attributes.answer;
    } else {
    }
    const questionId = parseInt(question.id);
    const buttonClass = (active) =>
      'binary-button button button-label' + (active ? ' selected' : '');
    const description = question.attributes.description;
    const buttonOpen = status && description ? 'open' : '';
    return (
      <div
        className={`column button-container ${buttonOpen}`}
        key={question.id}
      >
        <div className="row button-row">
          <p className="button-row-text">{question.attributes.question}</p>
          <div className="button-cell">
            <h2
              className={buttonClass(status === true)}
              onClick={() => {
                this.handleUpdateQuestionAnswer(index, true);
              }}
            >
              Yes
            </h2>
            <h2
              className={buttonClass(status === false)}
              onClick={() => {
                this.handleUpdateQuestionAnswer(index, false);
              }}
            >
              No
            </h2>
          </div>
        </div>
        {description ? (
          <text className="secondary-prompt">{description}</text>
        ) : null}
        {index === 0 ? (
          <div className="row button-row">
            <input
              className="secondary-answer"
              onChange={(e) => this.handleSecondaryAnswerChange(e, index)}
              value={answer ? answer.data.attributes.description : null}
            />
          </div>
        ) : null}
        {index === 1 ? (
          <CustomSelect
            className="secondary-answer"
            placeholder="age"
            onChange={(e) => this.handleSecondaryAnswerChange(e, index)}
            value={answer ? answer.data.attributes.description : null}
          >
            {this.ages()}
          </CustomSelect>
        ) : null}
        {index === 2 ? (
          <CustomSelect
            className="secondary-answer"
            placeholder="Select your occupation"
            onChange={(e) => this.handleSecondaryAnswerChange(e, index)}
            value={answer ? answer.data.attributes.description : null}
          >
            <option value="" selected={true}></option>
            <option value="Teacher">Teacher</option>
            <option value="Engineer">Engineer</option>
            <option value="Firefighter">Firefighter</option>
            <option value="Police">Police</option>
            <option value="Former Military">Former Military</option>
            <option value="Current Military">Current Military</option>
            <option value="First Responder">First Responder</option>
            <option value="OHSU Employee">OHSU Employee</option>
            <option value="Other">Other</option>
          </CustomSelect>
        ) : null}
      </div>
    );
  }

  render() {
    const prevent = this.props.transitioning ? ' prevent' : '';
    return (
      <div className="b-screen">
        <div className="header-container">
          <h1>
            Hey{' '}
            {
              this.props.drivers[this.props.currentDriver].data.attributes
                .first_name
            }{' '}
            tell us a bit more
          </h1>
          <p>Discover Additional Quote Discounts</p>
        </div>

        <div
          className={
            'input-container input-container-wide ' +
            (Rfq.submitted(this.props.rfq) ? 'prevent' : '')
          }
        >
          {this.props.auxiliary_question_info.questions.map(
            (question, index) => (
              <div>{this.button(question, index)}</div>
            )
          )}
        </div>
        <div className="row navigation-button-row">
          <Link to="/new-car/drivers" className={prevent}>
            <button
              className={'button-secondary'}
              to="/new-car/drivers"
              onClick={() => {}}
            >
              Back
            </button>
          </Link>
          {Rfq.submitted(this.props.rfq) ? (
            <ConditionalLink
              to="/new-car/drivers/accidents"
              disabled={this.state.disabledButton}
            >
              <button className="button-primary">Next</button>
            </ConditionalLink>
          ) : (
            <ConditionalLink
              to="/new-car/drivers/accidents"
              disabled={this.state.disabledButton}
            >
              <button
                disabled={this.state.disabledButton}
                className={'button-primary'}
                onClick={() => {
                  this.props.updateUserDriverRequest();
                }}
              >
                Next
              </button>
            </ConditionalLink>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auxiliary_question_info: state.auxiliary_question_info,
    questions: state.questions,
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(DriverDetailB);
