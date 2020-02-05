import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Jasad from '../data/imgs/Jasad.jpg'
const authenticatedOptions = (
  <React.Fragment >
    <Link className="header-btns" to="/change-password">Change Password</Link>
    <Link className="header-btns" to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment >
    <Link className="header-btns" to="/sign-up">Sign Up</Link>
    <Link className="header-btns" to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment >
    <Link className="header-btns" to="/">Home</Link>
    {/* link to orgpin */}
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
  
    <nav className="header-btns-container">
    <div className="img-div"><img className ="header-img" src={Jasad} /*width="50%" height="520px" *//></div>
    {/* <div className="img-div"><img className ="header-img" src="../data/imgs/Jasad.JPG" width="17%" height="133px" /></div> */}

      { user && <span className="welcome" >Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
