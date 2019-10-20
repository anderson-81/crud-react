import React, { Component } from 'react'

class Title extends Component{

	render(){

        const { title } = this.props

		return(
			<div className='row'>
            	<div className='col-md-12 mx-auto d-block'>
            		<div className='form-group'>
            			<h1 className='display-4 text-center margin-top-3'>{title}</h1>
            			<hr/>	
            		</div>
            	</div>
         	</div>
		)
	}
}


export default Title