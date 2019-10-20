import React, { Component } from 'react'
import Button from './Button'

class RowTable extends Component{

	render(){
		const { person, showCrud } = this.props
		return(
			<tr>
			    <td className='text-center'>{person.id}</td>
	        	<td className='text-center'>{person.name}</td>
	            <td className='text-center'>{person.email}</td>
	            <td className='text-center'><Button classbutton={'btn btn-primary'} id={'btnSelect' + person.id} click={() => showCrud(true, person)} text={'SELECT'} /></td>
	        </tr>
		)
	}
}

export default RowTable