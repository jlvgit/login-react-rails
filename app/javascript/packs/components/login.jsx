import React from 'react'

const Login = (props) => {

    const handleLogin = (e) => {
        e.preventDefault()
        const userInfo = {
            user: {
                email: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/users/sign_in',
            dataType: 'json',
            data: userInfo,
            error: function (error) {
                console.log(error)
            },
            success: function (res) {
                console.log(res)
                props.changePage('edit')
                props.updateCurrentUser(res.username)
         },
        })
    }

    return (
        <form>
                <div className="field">
                    <label>Username</label>
                    <input type="text"/>
                </div>  

                <div className="field">
                    <label>Password</label>
                    <input type="password"/>
                </div>  

                <div className="field">
                    <button onClick={() => {handleLogin(event)}}>Submit</button>
                </div>  
                
                <div>Don't have an account? <button onClick={props.changePage('signup')}>Sign Up!</button></div>
        </form>
    )

}

export default Login;