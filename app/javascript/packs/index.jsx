import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Components
import Login from './components/login'
import Signup from './components/signup'
import Show from './components/show'


class Home extends Component {
  state = {
    page:'login',
    currentUser: ''
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

  getPage = () => {
    switch(this.state.page) {
      case 'login':
       return <Login changePage={this.changePage} updateCurrentUser={this.updateCurrentUser}/>
      case 'signup':
       return <Signup changePage={this.changePage}/>
      case 'show':
       return <Show changePage={this.changePage}/>
     }
  }

  render(){
    let page = this.getPage()
    return(
     <div>{page}</div>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home/>,
    document.body.appendChild(document.createElement('div')),
  )
})
