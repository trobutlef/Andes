import React from 'react'
import './Header.css'
import template from './img/andes_logos.jpg'

function Header() {
  return (

    <div className = 'header'>

      <img className="header_logo" src={template}/>

      <div className="header_search">
        <input className = "header_searchInput" type="text"/>
          {/*Logo*/}
      </div>

      <div className="header_nav"> 
        <div className="header_option"> {/* Sign in*/}
          <span className='header_optionLineOne'> Hello Guest </span>
          <span className='header_optionLineTwo'> Sign In </span>
        </div>

        <div className="header_option"> {/* Return & orders*/}
        </div>

        <div className="header_option"> {/* Prime*/}
        </div>

      </div>
    </div>
  )
}

export default Header
