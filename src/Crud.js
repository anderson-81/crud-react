import React, { Component } from 'react'
import TextBox from './TextBox'
import Button from './Button'
import ListError from './ListError'
import Modal from './Modal'
import ButtonModal from './ButtonModal'
import Title from './Title'
import $ from 'jquery'
import Registration from './db/Registration'
import Person from './db/Person'

class Crud extends Component{

  constructor(){
    super()
    this.state = {
      edition : false,
      id: '',
      name: '',
      email: '',
      errors: []
    }
    this.create = this.create.bind(this)
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.setPerson = this.setPerson.bind(this)
  }

  create(){
    const { showMessage, showList } = this.props
    const { name, email } = this.state
    disableForm.bind(this)(true)
    new Registration().create(new Person(0, name, email)).then((response) => {
      const { errors, op } = response
      if(errors.length === 0){
        toggleAlert.bind(this)(true)
        op ? showMessage(1, 'Successfully created.') : showMessage(4, 'Error creating.')  
        showList()
      }else{
        this.setState({ errors: errors })
        toggleErrors.bind(this)(true)
      } 
    })
  }

  edit(){
    const { showMessage, showList } = this.props
    const { id, name, email } = this.state
    toggleAlert.bind(this)(false)
    disableForm.bind(this)(true)
    toggleModal.bind(this)('modalEdit')
    new Registration().update(new Person(id, name, email)).then((response) => {
      const { errors, op } = response
      if(errors.length === 0){
        toggleAlert.bind(this)(true)
        op ? showMessage(1, 'Successfully edited.') : showMessage(4, 'Error editing.')  
        showList()
      }else{
        this.setState({ errors: errors })
        toggleErrors.bind(this)(true)
      } 
    })
  }

  delete(){
    const { showMessage, showList } = this.props
    const { id, name, email } = this.state
    new Registration().delete(new Person(id, name, email)).then((response) => {
      const { errors, op } = response
      const { showMessage, showList } = this.props
      toggleModal.bind(this)('modalDelete')
      disableForm.bind(this)(true)
      toggleAlert.bind(this)(true)
      op ? showMessage(1, 'Successfully deleted.') : showMessage(4, 'Error deleting.')  
      showList()
    })
  }

  setPerson(person){
    this.state.id = person.id
  }

  render(){
      let actions = null
      let current = null

      const { person, showList, edition } = this.props
      const { id, name, email } = this.state

      if(person)
        this.setPerson(person)

      if(edition){
        current = <div className='row margin-top-5'>
                    <div className='col-md-12 mx-auto d-block'>
                        <div className={'alert alert-warning alert-dismissible fade show'} role='alert'>
                          <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                          </button>
                          <h5 style={{'color':'#ff6363'}}>Current data for update:</h5>
                          <div style={{'color':'#ff6363'}}>
                            <ul>
                              <li><strong>ID:</strong> {person.id} </li>
                              <li><strong>Name:</strong> {person.name}</li>
                              <li><strong>Email:</strong> {person.email} </li>
                            </ul>
                          </div>
                         </div>
                      </div>
                  </div>

        actions = <div className='form-group'>
                   <Button classbutton={5} click={() => showList()} text={'Cancel'} id={'btnCancel'} />
                   <ButtonModal classbutton={3} mid={'#modalEdit'} text={'Edit'}  />
                   <ButtonModal classbutton={4} mid={'#modalDelete'} text={'Delete'} />
                  </div>
      }else{
        actions = <div className='form-group'>
                   <Button classbutton={1} click={this.create} text={'Create'} id={'btnCreate'} />
                   <Button classbutton={5} click={() => showList()} text={'Cancel'} id={'btnCancel'} />
                  </div>
      }

      return(
        <div>
          <Title title={'Registration'} />
          <div className='row'>
            <div className='col-md-8 mx-auto d-block'>
               <form name='pform'>
                 <ListError errors={this.state.errors} />
                 {current}
                 <TextBox fieldname={'name'} change={(event) => this.setState({ name: event.target.value })} value={name ? name : ''} />
                 <TextBox fieldname={'email'} change={(event) => this.setState({ email: event.target.value })} value={email ? email : ''} />
                 <div className='form-group'>
                    <hr/>
                 </div>
                 <Modal title={'Question'} text={'Do you want edit this record?'} mid={'modalEdit'} classbutton={3} select={() => this.edit()} />
                 <Modal title={'Question'} text={'Do you want delete this record?'} mid={'modalDelete'} classbutton={4} select={() => this.delete()} />
                 {actions}
               </form>
            </div>
          </div>  
        </div>
      )
  }
}

const disableForm = (value) => {
  $('button').prop('disabled', value)
  $('input').prop('disabled', value)
}

const toggleAlert = (opc) => {
  opc ? $('#divAlert').show() : $('#divAlert').hide()
}

const toggleErrors = (opc) => {
  opc ? $('#divErrors').show() : $('#divErrors').hide()
}

const toggleModal = (modal) => {
  $(`#${modal}`).modal('hide');
}

export default Crud