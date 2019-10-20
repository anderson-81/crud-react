import React, { Component } from 'react'

class Modal extends Component{

  render(){
    let style

    const { classbutton, mid, title, text, select } = this.props

    style = setButtonClass.bind(this)(this.props.classbutton)
    return(
        <div className='modal fade' id={mid} tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>{title}</h5>
                  <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
              </div>
              <div className='modal-body'>
                {text}
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary col-md-3 float-right' data-dismiss='modal'>No</button>
                <button type='button' className={style} onClick={select}>Yes</button>
              </div>
            </div>
          </div>
        </div>
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


export default Modal





