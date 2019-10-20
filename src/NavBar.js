import React, { Component } from 'react'

class NavBar extends Component{

  render(){
		return(
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'> 
				<a href='#' className='navbar-brand'>CrudReact</a>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' 
				aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavDropdown'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
						</li>
						<li className='nav-item'>
						</li>
					</ul>
				</div>
			</nav>  
		)
  }
}

export default NavBar



