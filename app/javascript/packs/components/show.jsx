import React from 'react'
import Axios from 'axios'

const Show = (props) => {

    const logout = () => {
        const csrfToken = document.querySelector('[name="csrf-token"]').content;
        Axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

        Axios.delete(`http://localhost:3000/api/sessions/${props.user.id}`, {
                authenticity: csrfToken
            })
        .then(
            (result) => {
                if (result.data.status === 'deleted') {
                    props.updateCurrentUser('')
                    props.changePage('login')
                }
            },
            (error) => {
                this.props.showErrorMessage(error)
            }
        )
    }

    return (
        <div>
            <p><strong>Username:</strong>{ props.user.username }</p>
            <p><strong>Firstname:</strong>{ props.user.firstname }</p>
            <p><strong>Lastname:</strong>{ props.user.lastname }</p>
            <p><strong>Lastlogin:</strong>{ props.user.lastlogin }</p>
            <p><strong>Logincount:</strong>{ props.user.logincount }</p>
            <button onClick={logout}>Logout</button>
        </div>
    )

}

export default Show;