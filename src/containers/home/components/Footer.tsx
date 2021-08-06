import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer style={{ textAlign: 'center' }}>
      <p className="small-text">
        &copy; {year} Seeker Inc. All Rights Reserved. Use of Seeker Inc. Services is subject to our<br />
        <Link
          className='link'
          to='/tos'>
          <b>Terms of Service</b>
        </Link>
        ,&nbsp;
        <Link
          className='link'
          to='/privacy'>
          <b>Privacy Policy</b>
        </Link>
        , and <b>Licenses.</b>
      </p>
      <p>
        Need help? Reach us at&nbsp;
        <a
          className="link"
          href="mailto:support@quoteseekr.com">
          support@quoteseekr.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;