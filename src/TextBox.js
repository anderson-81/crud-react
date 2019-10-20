import React, { Component } from 'react'

class TextBox extends Component{

   render(){

   	  const { fieldname, change, value } = this.props

      return(
          	<div className="form-group">
          		<label htmlFor={fieldname}>{capitalizeFirstLetter.bind(this)(fieldname)}</label>
            	<input type="text" id={fieldname} name={fieldname} onChange={change} className="form-control" value={value} />
            </div>
      )
   }
}

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}	

export default TextBox

         

