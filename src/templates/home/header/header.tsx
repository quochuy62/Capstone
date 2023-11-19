import React from 'react'
import { Link } from "react-router-dom";
import css from "./header.module.css"
import logo from "src/assets/icon/logo.svg"

function Header() {
  return (
    <header className={css["header"]}>
        <img className={css["logo"]} src={logo}/> 
        <Link to="/">Home</Link>
        <Link to="/detail">Showing Movies</Link>
        <Link to="/">Sign In</Link>
        <Link to="/">Sign Up</Link>
    </header>
  )
}

export default Header