import React, { Component } from 'react'

class ItemError extends Component{

	render(){

		const { index, error } = this.props

		return(
			<li key={index}>{error}</li>
		)
	}
}

export default ItemError