import React, {Component} from 'react'
import Axios from 'axios'

class Signup extends Component {

    handleSubmit = (e) => {
        const csrfToken = document.querySelector('[name="csrf-token"]').content;
        Axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

        e.preventDefault()

        Axios.post("http://localhost:3000/api/users", {
                user: {
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value,
                    password_confirmation: document.getElementById('password_confirmation').value,
                    firstname:document.getElementById('firstname').value,
                    lastname: document.getElementById('lastname').value
                },
                authenticity: csrfToken,
                headers: {
                    'Content-Type': 'application/json',
                  }
            })
        .then(
            (result) => {
                if (result.data.status === 'created') {
                    this.props.updateCurrentUser(result.data.location)
                    this.props.changePage('show')
                } else {
                    this.props.showErrorMessage(result.data.message)
                }
            },
            (error) => {
                console.log(error)
            }
        )

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type='email' id='email'></input>
                    </div>
    
                    <div>
                        <label>Password</label>
                        <input type='password' id='password'></input>
                    </div>
    
                    <div>
                        <label>Password Confirmation</label>
                        <input type='password' id='password_confirmation'></input> 
                    </div>
    
                    <div>
                        <label>First Name</label>
                        <input type='text' id='firstname'></input>
                    </div>
    
                    <div>
                        <label>Last Name</label>
                        <input type='text' id='lastname'></input>
                    </div>
    
    
                    <button type="submit"> Submit</button>
            </form>
        )

    }

}

export default Signup;