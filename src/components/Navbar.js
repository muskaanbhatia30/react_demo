import React from 'react' //imr
import propTypes from 'prop-types' //impt
import {
  Link,
} from "react-router-dom";



export default function Navbar(props) {
  return ( 
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/' className="nav-link" >home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link" >About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'}`}>
   <input className="form-check-input"  onClick={props.togglefunc}type="checkbox" id="flexSwitchCheckDefault"/>
   <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
  
}
Navbar.propTypes = {
    title: propTypes.string,
  }
