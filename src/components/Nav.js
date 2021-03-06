import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Miniflix</Link>
        </div>

        <ul className="nav navbar-nav">
          <li>
            <Link to="/">All Videos</Link>
          </li>
          {
            ( isLoggedIn() ) ? <li><Link to="/upload">Upload Video</Link></li> : ''
          }
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li>
            {
              (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out</button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log in</button> )
            }
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;