import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 'enter a message'

    };
  }

  handleMessageEntry = (event) => {
    this.setState({
      message: event.target.value
    })
    console.log(this.state.message)
  }

  render() {
    let charCount = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        name="message"
        id="message"
        value={this.state.message}
        onChange={event => this.handleMessageEntry(event)}
        />
        {charCount}/{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
