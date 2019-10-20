class AlertMessage{

  constructor(){
    this.title = ''
    this.style = ''
    this.message = ''
  }

  createAlert(opt, message){
    this.message = message
    switch(opt) {
      case 2:
        this.title = 'Info!'
        this.style = 'alert alert-info alert-dismissible fade show'
        break
      case 3:
        this.title = 'Warning!'
        this.style = 'alert alert-warning alert-dismissible fade show'
        break
      case 4:
        this.title = 'Error!'
        this.style = 'alert alert-danger alert-dismissible fade show'
        break
      default:
        this.title = 'Success!'
        this.style = 'alert alert-success alert-dismissible fade show'
        break
    }
    return {
      title: this.title,
      style: this.style, 
      message: this.message 
    };
  }
}

export default AlertMessage