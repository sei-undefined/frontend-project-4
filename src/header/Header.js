import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

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
    <div className="img-div"><img className ="header-img" src="https://mail.google.com/mail/u/0?ui=2&ik=8a410340a8&attid=0.1.1&permmsgid=msg-f:1657618889263371888&th=17010b98eb855670&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9LbBHFT2ySFqo6kDMllNtGhCJD-BHsFY4mNF-6WbIy3t3ahJaDPwVGtgaMj7mecS0rB_N-NGob1NtWFJul1OwiDX9Ku6IMm_Rut0p2s8r-XqN8BmAp-cz0CAw&disp=emb" width="21%" height="183px" /></div>
    {/* <div className="img-div"><img className ="header-img" src="../data/imgs/Jasad.JPG" width="17%" height="133px" /></div> */}

      { user && <span className="welcome" >Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
