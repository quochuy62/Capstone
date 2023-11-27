import React from 'react'
import { Link, NavLink } from "react-router-dom";
import css from "./header.module.css"
import logo from "src/assets/icon/logo.svg"

function Header() {
  return (
    <header className={css["header"]}>
      <div>
      <img className={css["logo"]} src={logo}/> 
      </div>
      <nav className={css["nav"]}>
      <NavLink 
      style={(rest) => {
        return {
          color: rest.isActive ? "red" : "white",
        };
      }}
      className={css["link-active"]}
      to={"/"}
      >Home</NavLink>
        <NavLink className={css["link-active"]} to="/">Showing Movies</NavLink>
        <NavLink className={css["link-active"]} to="/">Sign In</NavLink>
        <NavLink className={css["link-active"]} to="/">Sign Up</NavLink>
      </nav>
      <div className={css["user"]}>
        <span>user@gmail.com</span>
      </div>
        
        
    </header>
  )
}

export default Header