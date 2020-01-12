import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Components
import Login from './components/login'
import Signup from './components/signup'
import Show from './components/show'


class Home extends Component {
  state = {
    page:'login',
    currentUser: '',
    errorMessage: ''
  }

  changePage = (newPage) => {
    this.setState({
      page: newPage
     })
  }

  updateCurrentUser = (newUser) => {
    this.setState({
      currentUser: newUser
     })
  }

  updateErrorMessage = (message) => {
    this.setState({
      errorMessage: message
     })
  }

  getPage = () => {
    switch(this.state.page) {
      case 'login':
       return <Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} showErrorMessage={this.updateErrorMessage}/>
      case 'signup':
       return <Signup changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} showErrorMessage={this.updateErrorMessage}/>
      case 'show':
       return <Show changePage={this.changePage} updateCurrentUser={this.updateCurrentUser} user={this.state.currentUser}/>
     }
  }

  render(){
    return(
    <div>
      <strong className='error' >{this.state.errorMessage}</strong>
      <div>{this.getPage()}</div>
     </div>
    )
  }

}

ReactDOM.render(
    <Home/>,
    document.body.appendChild(document.createElement('div')),
  )

