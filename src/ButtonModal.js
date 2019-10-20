import React, { Component } from 'react'

class ButtonModal extends Component{

	render(){
		let style = setButtonClass.bind(this)(this.props.classbutton)
		return(
			<button type="button" onClick={this.props.select} className={style} data-toggle="modal" data-target={this.props.mid}>{this.props.text}</button>
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


export default ButtonModal