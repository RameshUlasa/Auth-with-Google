import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'

import {AiFillApple} from 'react-icons/ai'

import './index.css'

const clientId =
  '208905205974-gn2b432fqii70pv7fhghmrua37at57vp.apps.googleusercontent.com'

class LoginForm extends Component {
  state = {
    redirectToDashboard: false,
    username: '',
    password: '',
    errors: {
      username: '',
      password: '',
    },
  }

  onChangeUsername = event => {
    const {value} = event.target
    this.setState(prevState => ({
      username: value,
      errors: {...prevState.errors, username: ''},
    }))
  }

  onChangePassword = event => {
    const {value} = event.target
    this.setState(prevState => ({
      password: value,
      errors: {...prevState.errors, password: ''},
    }))
  }

  validateForm = () => {
    const {username, password} = this.state
    let isValid = true
    const errors = {}

    // Validate username
    if (!username) {
      isValid = false
      errors.username = 'Username is required'
    }

    // Validate password
    if (!password) {
      isValid = false
      errors.password = 'Password is required'
    }

    this.setState({errors})
    return isValid
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.validateForm()) {
      this.setState({redirectToDashboard: true})
    }
  }

  onSuccess = res => {
    console.log('Login Success! Current User: ', res.profileObj)
    this.setState({redirectToDashboard: true})
  }

  onFailure = res => {
    console.log('Login Failed: ', res)
  }

  render() {
    const {redirectToDashboard} = this.state

    if (redirectToDashboard) {
      return <Redirect to="/dashboard" />
    }

    const {username, password, errors} = this.state
    return (
      <div className="login-form-container">
        <div className="logo-container">
          <h1 className="main-head">Board.</h1>
        </div>
        <div className="form-container">
          <div className="form-content-container">
            <h1 className="sign-in-head">
              Sign In
              <br />
              <span className="sign-in-tag">Sign in to your account</span>
            </h1>
            <div className="login-with-btn-container">
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy="single_host_origin"
              />

              <button className="sign-in-with-btn" type="button">
                <AiFillApple className="google-apple-icon" />
                Sign in with Apple
              </button>
            </div>
            <form className="form-card" onSubmit={this.handleSubmit}>
              <label className="input-label" htmlFor="mail">
                Email address
              </label>
              <input
                value={username}
                onChange={this.onChangeUsername}
                className="input"
                id="mail"
                type="email"
                placeholder="Email"
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <input
                value={password}
                onChange={this.onChangePassword}
                className="input"
                id="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
              <p className="forgot-password">Forgot password?</p>
              <button className="submit-btn" type="submit">
                Sign In
              </button>
            </form>
            <p className="dont-have-acc">
              Don't have an account?
              <span className="register">Register here</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
