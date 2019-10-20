import React, { Component } from 'react'
import Alert from './Alert'
import Footer from './Footer'
import NavBar from './NavBar'
import App from './App'
import AlertMessage from './help/AlertMessage'

class Container extends Component{

  constructor(){
      super()
      this.state = {
      	list: true,
        alert: null
      }
      this.alert = new AlertMessage()
      this.showMessage = this.showMessage.bind(this)
   }

  showList(){
    this.setState({
      list: true
    })
  }

  showCrud(){
    this.setState({
      list: false
    })
  }

  showMessage(opc, message){
    this.setState({
      alert: this.alert.createAlert(opc, message)
    })
  }

  render(){
    const { alert } = this.state
    return(
      <div>
        <NavBar />
        <div className='container'>
          <Alert alert={alert} />
      		<App showMessage={this.showMessage} />  
      		<Footer />
        </div>
      </div>
    )
  }
	
}

export default Container


