import React, { Component } from 'react'

class Login extends Component {

    handleSubmit = (e) => {
        console.log('submitted')
        e.preventDefault()
        const userInfo = {
            user: {
                email: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }

        fetch("http://localhost:3000/sessions/new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userInfo),
            })
        .then(
            (result) => {
                console.log(result)
                this.props.changePage('show')
                this.props.updateCurrentUser(result.username)
            },
            (error) => {
                console.log(error)
            }
        )

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" id='username'/>
                    </div>  
    
                    <div className="field">
                        <label>Password</label>
                        <input type="password" id='password'/>
                    </div>  
    
                    <div className="field">
                        <button type="submit">Submit</button>
                    </div>  
                
                    <div>Don't have an account? <button onClick={() => {this.props.changePage('signup')}}>Sign Up!</button></div>
            </form>
        )

    }

}

export default Login;