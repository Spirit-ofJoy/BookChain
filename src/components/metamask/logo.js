import React from 'react';

//This is the logo with the animated polls
const Logo = () => {
    return (
        <div className="poll-animated-icon-and-name">
        <div className="animated-poll-box">
          <div className="login-sign-up-page-animated-box">
            <div className="login-sign-up-page-individual-polls-section">
              <div className="login-sign-up-page-poll-bar" id="poll-1" />
            </div>
            <div className="login-sign-up-page-individual-polls-section">
              <div className="login-sign-up-page-poll-bar" id="poll-2" />
            </div>
            <div className="login-sign-up-page-individual-polls-section">
              <div className="login-sign-up-page-poll-bar" id="poll-3" />
            </div>
          </div>
        </div>
        <div>
          <h1 id="app-name-login-page" align="center">App-Name</h1>
          <h2 id="some-insipiring-quote-login-page" align="center">Ab democracy apne haath me</h2>
        </div>
      </div>
    );
}

export default Logo;