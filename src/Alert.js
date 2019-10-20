import React, { Component } from 'react'
import $ from 'jquery'

class Alert extends Component{

	render(){

		const { alert } = this.props

		let cmp
		
		showDivAlert.bind(this)

		if(alert != null){
			cmp = <div className='row margin-top-5' id='divAlert'>
	            <div className='col-md-12 mx-auto d-block'>
	               <div className={alert.style} role='alert'>
	                  <strong>{alert.title}</strong> - {alert.message}
	                  <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
	                  	<span aria-hidden='true'>&times;</span>
	                  </button>
	               </div>
	            </div>
         	</div>
		}else{
			cmp = <div className='row' id='divAlert'></div>
		}

		hideDivAlert.bind(this)(7000)

		return(
			cmp
		)
	}
}

const showDivAlert = () => {
	$('#divAlert').hide()
	$('#divAlert').show()
}

const hideDivAlert = (time) => {
	setTimeout(() => { $('#divAlert').hide() }, time)
}


export default Alert