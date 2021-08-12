import { Link } from 'react-router-dom';
import React from 'react';

import CodingIcon from '../../components/svgs/coding-icon';

import './coming-soon.css';

export const ComingSoon = () => (
  <div className="coming-soon">
    <CodingIcon className="section-graphic" />
    <p className="header">Coming soon!</p>
    <p className="info">
      Right now Seekr is available in Oregon but hold tight!
    </p>
    <p className="info">We're working on coming to your town.</p>
    <Link to="/">HOME</Link>
  </div>
);

export default ComingSoon;
