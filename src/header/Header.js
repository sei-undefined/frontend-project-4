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
    <img className ="header-img" src="https://mail.google.com/mail/u/0?ui=2&ik=8a410340a8&attid=0.1&permmsgid=msg-a:r-5204821873046122752&th=1700d3d9a3b6f295&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8GUogzjfNYeYMezC9blpErgUwLQ-7BMO1jT8Q7NSRQHtoE2BtvEWWZw-32ZtNqoS4oTnaCCozA9OYwBGFJxBZQKdtz0QRjB06aw0nl_eO96B6QrSDzyGAnCVI&disp=emb&realattid=1700d3d8f6a1adfe0ad1" width="10%" height="11%" />

      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
