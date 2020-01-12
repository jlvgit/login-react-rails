import React, { Component } from 'react'
import Axios from 'axios'

class Login extends Component {

    handleSubmit = (e) => {
        const csrfToken = document.querySelector('[name="csrf-token"]').content;
        Axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

        e.preventDefault()

        Axios.post("http://localhost:3000/api/sessions", {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                authenticity: csrfToken,
                headers: {
                    'Content-Type': 'application/json',
                  }
            })
        .then(
            (result) => {
                if (result.data.email) {
                    this.props.changePage('show')
                    this.props.updateCurrentUser(result.data)
                } else if (result.data.status === 'error') {
                    this.props.showErrorMessage(result.data.message)
                }
            },
            (error) => {
                this.props.showErrorMessage(error)
            }
        )
    }

    signup = () => {
        this.props.changePage('signup')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" id='email'/>
                    </div>  
    
                    <div className="field">
                        <label>Password</label>
                        <input type="password" id='password'/>
                    </div>  
    
                    <div className="field">
                        <button type="submit">Submit</button>
                    </div>  
                
                    <div>Don't have an account? <button onClick={this.signup}>Sign Up!</button></div>
            </form>
        )

    }

}

export default Login;