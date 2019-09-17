import React, { Component } from 'react'
import './sign.css'
import { Link } from 'react-router-dom'

export default class Signup extends Component {
    state = {
        authStart: false,

      FirstName: '',
      LastName: '',
      email: '',
      password: '',
      confirmPass: '',
      FirstnameErr:'',
      LastnameErr:'',
      emailErr:'',
      PasswordnameErr:'',
      confirmpassErr:'',
        password_confirmation: '',
        passErr: null
    }

    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onFormSubmit =(e)=> {
        e.preventDefault()
        if(!this.state.FirstName || !this.state.LastName || !this.state.email || !this.state.email || !this.state.password || !this.state.confirmPass) {
            return this.setState({FirstnameErr:'Please fill in the required fields '})
        }
        
        return console.log('hello')
    }

    submitHandler = e => {
        e.preventDefault()
        const { password, password_confirmation } = this.state
        if (password !== password_confirmation) {
            return this.setState({
                passErr: true
            })
        }
        this.setState({
            passErr: false
        })
    }
    render() {

        let passErrHandler = ''
        if (this.state.passErr) {
            passErrHandler = 'Passwords do not match!'
        }
        return (
            <div>
                <div
                    className="ui middle aligned center aligned grid"
                    style={{ transform: 'translateY(40%)' }}
                >
                    <div className="column">
                        <h2 className="ui teal image header">
                            <div className="content">Sign-up</div>
                        </h2>
                        <form
                            className="ui large form error"
                            onSubmit={this.submitHandler}
                        >
                            <div className="ui stacked segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            onChange={this.inputHandler}
                                            required
                                            minLength="4"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="mail icon"></i>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail Address"
                                            onChange={this.inputHandler}
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
                                            onChange={this.inputHandler}
                                            required
                                            minLength="6"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            placeholder="Confirm Password"
                                            onChange={this.inputHandler}
                                            required
                                            minLength="6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button className="ui fluid large teal submit button" onClick={this.onFormSubmit}>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                    <div className="ui error message">{this.state.FirstnameErr}</div>

                            <div className="ui error message">{passErrHandler}</div>
                            <div className="ui message">
                                Already have an account? <Link to="/Login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
