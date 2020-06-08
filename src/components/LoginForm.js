import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: 'username',
      password: 'password'
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username)
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state.password)
  }

  handleLogin = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
