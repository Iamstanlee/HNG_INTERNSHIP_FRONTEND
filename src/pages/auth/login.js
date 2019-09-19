import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import BackendApi from "./backendApi";
import qs from "qs";
import History from '../../components/history';

import "./sign.css";

class Login extends Component {
  state = {
    respass: false,
    emailSent: false,
    verificationSuccess: false,
    loading: false,
    email: "",
    password: "",
    Err: "",
    isLoading: false
  };

  onEmailInput = e => {
    this.setState({ email: e.target.value });
  };
  onPasswordInput = e => {
    this.setState({ password: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    BackendApi.post(
      "/index.php/login",
      qs.stringify({
        email: this.state.email,
        password: this.state.password
      })
    ).then(res => {
      console.log(res);
      this.setState({ isLoading: false });
      if (res.data.error === 1) {
        return this.setState({
          Err: "Invalid details or Account does not exist"
        });
      }
      History.push('/welcome');
      ;
    });
  };

  render() {
    return (
      <div style={{ transform: "translateY(80%)" }} className="contain ">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">Login to your Account</div>
            </h2>
            <form className="ui large form error" onSubmit={this.onFormSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="mail icon"></i>
                    <input
                      type="email"
                      name="text"
                      placeholder="E-mail Address"
                      onChange={this.onEmailInput}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.onPasswordInput}
                      required
                    />
                  </div>
                </div>

                <div className="">
                  {" "}
                  <button
                    type="submit"
                    className="ui fluid large teal submit button"
                    disabled={this.state.isLoading}
                  >
                    {this.state.isLoading ? "Please Wait...." : "Login"}
                  </button>
                </div>
              </div>

              <div
                className="ui error message"
                type="submit"
                onClick={this.onFormSubmit}
              >
                {this.state.Err}
              </div>
            </form>
            <div className="ui message">
              <p style={{ fontSize: "1.1rem" }}>
                New to us? <Link to="/signup">Sign Up</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
