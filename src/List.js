import React, { Component } from 'react'
import Table from './Table'

class List extends Component{

  render(){
  	const { showCrud, people } = this.props
  	return(<Table showCrud={showCrud} people={people} />)
  }
}

export default List