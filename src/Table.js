import React, { Component } from 'react'
import $ from 'jquery'
import RowTable from './RowTable'
import Button from './Button'
import Title from './Title'
import Controller from './db/Controller'

class Table extends Component{

  constructor(){
      super()
      $(document).ready(() => {
         $('#tbpeople').DataTable({
           searching: true,
           'lengthChange': false,
           'pageLength': 5,
           'order': [[0, 'asc']],
           'aoColumnDefs': [{ 'bVisible': false, 'aTargets': [0] }]
          })
      })
  }

  select(person){
    console.log(person)
    this.props.showCrud(true, person)


  }

  render(){
      let row = []
      const { showCrud, people } = this.props
      return(
         <div>
             <Title title={'Listing'} />
             <div className='form-group'>
              <table className='table table-hover' id='tbpeople'>
                 <thead>
                    <tr>
                       <th className='text-center'>Id</th>
                       <th className='text-center'>Name</th>
                       <th className='text-center'>E-mail</th>
                       <th className='text-center'>SELECT</th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                      people.map((person, index) => {
                        row.push(<RowTable person={person} key={person.id} showCrud={showCrud} />)
                      })    
                    }
                    {row}
                 </tbody>
              </table>
            </div>
            <div className='form-group'>
              <Button classbutton={1} click={() => showCrud(false)} text='Create' />
            </div>
        </div>
      )
  }
}

export default Table

