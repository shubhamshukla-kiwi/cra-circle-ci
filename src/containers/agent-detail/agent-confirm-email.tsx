import { connect } from 'react-redux';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import React, { Component } from 'react';

import './agent-detail.css';

class PleaseConfirmEmail extends Component {
  handleResendEmail = () => {
    this.props.resendEmailConfirmation();
    alert('Confirmation email has been resent');
  };

  componentDidMount() {
    localStorage.setItem('formProgressPathname', window.location.pathname);
    if (this.props.formProgress && this.props.formProgress.firstCarCreated) {
      setTimeout(() => {
        localStorage.clear();
      }, 1000);
    }
  }

  render() {
    const shareButtonConfig = {
      url: 'https://www.quoteseekr.com/',
    };

    return (
      <div className="please-confirm-email">
        <div className="header-container">
          <h1>Please verify your email</h1>
          <p>Confirm your email so we can put you in touch with real agents.</p>
          <p>
            Your information will not be distributed until your email is
            confirmed.
          </p>
        </div>
        <p className="confirmation">
          Don&#39;t see an email? Don't forget to check your Junk/Spam folder
        </p>
        <p className="confirmation">
          Still don&#39;t see an email? Click{' '}
          <span onClick={this.handleResendEmail}>here</span> to resend it.
        </p>
        <hr style={{ width: 120 }} />
        <p> Did you enjoy the Seekr experience? Recommend to your friends!</p>
        <div
          style={{
            width: 320,
            margin: 'auto',
            display: 'flex',
          }}
        >
          <EmailShareButton {...shareButtonConfig}>
            <EmailIcon size={32} round />
          </EmailShareButton>
          <FacebookShareButton {...shareButtonConfig}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <LinkedinShareButton {...shareButtonConfig}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <TelegramShareButton {...shareButtonConfig}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton {...shareButtonConfig}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton {...shareButtonConfig}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <hr style={{ width: 120 }} />
        <button
          onClick={() => {
            localStorage.clear();
            this.props.history.push('/');
          }}
        >
          FINISH
        </button>
      </div>
    );
    // }
  }
}

function mapStateToProps(state) {
  return {
    formProgress: state.formProgress,
  };
}

export default connect(mapStateToProps)(PleaseConfirmEmail);
