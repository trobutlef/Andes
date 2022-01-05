import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className = 'header'>
      <img className="header_logo" src="img/andes_logos"/>
      <div className="header_search">
        <input 
          className = "header_searchInput" type="text"/>
          {/*Logo*/}
      </div>
     <div className="header_nav"> 
      <div className="header_option"> 
        <span className='header_optionLineOne'> Hello Guest </span>
        <span className='header_optionLineTwo'> Sign In </span>
      </div>
      <div className="header_option"> 

      </div>
      <div className="header_option"> 

      </div>
     </div>

    </div>
  )
}

export default Header
