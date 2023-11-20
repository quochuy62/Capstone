import React from 'react'
import { Link } from "react-router-dom";
import css from "./header.module.css"
import logo from "src/assets/icon/logo.svg"

function Header() {
  return (
    <header className={css["header"]}>
      <div>
      <img className={css["logo"]} src={logo}/> 
      </div>
      <nav className={css["nav"]}>
      <Link to="/">Home</Link>
        <Link className={css["link-active"]} to="/detail">Showing Movies</Link>
        <Link to="/">Sign In</Link>
        <Link to="/">Sign Up</Link>
      </nav>
      <div className={css["user"]}>
        <span>user@gmail.com</span>
      </div>
        
        
    </header>
  )
}

export default Header