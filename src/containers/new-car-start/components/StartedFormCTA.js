import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from '../../../components/conditional-link/conditional-link';

const StartedFormCTA = ({ lastPathname }) => {
  return (
    <ConditionalLink
      to={lastPathname}>
      <p className="started-form-cta text-dark">
        <svg enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="50" width="50"/><path d="M49,4v25c0,0-5.273,3-12,3  c-11.929,0-15.869-4-24-4S1,30,1,30V3c0,0,2.085-2,12-2s14.047,6,24,6C43.281,7,48.13,4.471,49,4z" fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" x1="1" x2="1" y1="3" y2="49"/></svg>
        Hello, welcome back! We can see that you already have started.&nbsp;
        <b>Let's continue now and get your quotes!</b>
      </p>
    </ConditionalLink>
  );
};

StartedFormCTA.propTypes = {

};

export default StartedFormCTA;