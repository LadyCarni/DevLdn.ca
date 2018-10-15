import React, { Component } from 'react';
import slack from '../assets/slack.svg';
import meetup from '../assets/meetup.png';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      button: true
    };
  }

  morphForm() {
    this.setState({ button: !this.state.button });
  }

  render() {
    let slack_class = this.state.button ? 'button' : 'form';

    return (
      <header>
        <h1>
          Bringing tech <span className="pop">together</span>
          <br />
          in the <span className="pop">Forest City</span>
        </h1>
        <p>
          Dev London is your opportunity to gather insights and get inspired by
          the most influential software professionals. Hear their stories, ask
          them questions, network with others in the industry. Refreshments are
          on us!
        </p>
        <div className="action-container">
          <button
            className={`call-to-action slack grow shadow ${slack_class}`}
            onClick={this.morphForm.bind(this)}
          >
            <img
              src={slack}
              className="slack-img left shadow"
              alt="Slack logo"
            />
            Join the community
          </button>
          <a
            className="call-to-action meetup grow shadow"
            href="https://www.meetup.com/Dev-London/"
          >
            <img
              src={meetup}
              className="meetup-img right shadow"
              alt="Meetup logo"
            />
            Come to an event
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
