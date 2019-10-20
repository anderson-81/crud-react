import React, { Component } from 'react'

class Footer extends Component{

  render(){
      return(
        <footer style={{'marginTop':'5%'}}>
           <div className='row'>
              <div className='col-md-12 mx-auto d-block'>
                <div className='form-group'>
                  <hr/> 
                  <p className='text-center'><strong>@2019</strong></p> 
                </div>
              </div>
          </div>
        </footer>
      )
  }
}

export default Footer