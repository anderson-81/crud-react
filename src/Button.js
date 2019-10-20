import React, { Component } from 'react'

class Button extends Component{

	render(){

		const { classbutton, id, click, text } = this.props
		
		let style = Number.isInteger(classbutton) ? setButtonClass.bind(this)(classbutton) : classbutton

		return(
			<button type="button" id={id} className={style} onClick={click}>{text}</button>
		)
	}
}

const setButtonClass = (opc) => {
	let style
	switch(opc){
		case 2:
			style = 'btn btn-info col-md-3 float-right'
			break
		case 3: 
			style = 'btn btn-warning col-md-3 float-right'
			break
		case 4: 
			style = 'btn btn-danger col-md-3 float-right'
			break
		case 5: 
			style = 'btn btn-secondary col-md-3 float-right'
			break
		default:
			style = 'btn btn-success col-md-3 float-right'
			break
	}
	return style
}


export default Button

