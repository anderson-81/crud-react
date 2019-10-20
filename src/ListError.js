import React, { Component } from 'react'
import ItemError from './ItemError'
import $ from 'jquery'

class ListError extends Component{

   render(){
      let cmp
      let list = []

      const { errors } = this.props

      if(errors.length > 0){

         errors.map((error, index) => {
            list.push(<ItemError error={error} key={index} />)
         })

         cmp =  <div className='form-group'>
                  <div className='alert alert-dismissible fade show div-error' role='alert' id='divErrors'>
                     <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
                     <span aria-hidden='true'>&times;</span>
                     </button>
                     <div className='margin-5'>
                        <h5 className='font-bold'>Error List:</h5>
                        <ul>
                           {list}
                        </ul>
                     </div>
                  </div>
               </div>

         enableForm.bind(this)()

      }else{
         cmp = <div className='form-group'></div>
      }

      return(
        cmp
      )
   }
}

const enableForm = () => {
   $(document).ready(() => {
      setTimeout(() => { 
         $('#divErrors').hide()
         $('button').prop('disabled', false)
         $('input').prop('disabled', false)
      }, 4000); 
   })      
}

export default ListError
         