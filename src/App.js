import React, { Component } from 'react'
import Crud from './Crud'
import List from './List'
import Controller from './db/Controller'
import $ from 'jquery'

class App extends Component{

  constructor(){
      super()
      this.state = {
      	list: true
      }
      this.edition = false
      this.person = null
      this.people = Controller.people
      this.showCrud = this.showCrud.bind(this)
      this.showList = this.showList.bind(this)
  }

  showList(){
    this.setState({
      title: 'Listing',
      list: true
    })
  }

  showCrud(value, person){
    this.setState({
      title: 'Registration',
      list: false
    })
    this.edition = value
    this.person = (person != null ) ? person : null 
  }

  render(){

    let cmp = null

    const { showMessage } = this.props
    
    if(this.state.list){
      cmp = <List showMessage={showMessage} people={this.people} showCrud={this.showCrud} />
      
    }else{
      cmp = <Crud showMessage={showMessage} edition={this.edition} showList={this.showList} person={this.person} />
    }

    return(
      <div>
        {cmp}
      </div>
    )
  }
}

export default App