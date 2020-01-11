import React from 'react'

const Signup = () => {
    return (
        <div>
                <div className="field">
                    <label>Username</label>
                    <input type="text"/>
                </div>  

                <div className="field">
                    <label>Password</label>
                    <input type="password"/>
                </div>  

                <div className="field">
                    <button>Submit</button>
                </div>  
        </div>
    )

}

export default Signup;