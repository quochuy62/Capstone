import React from 'react'
import logo from "src/assets/icon/logo.svg"
import css from "./footer.module.css"
import { IconFace, IconInstagram, IconSkype } from 'src/assets/icon'
function Footer() {
  return (
    <footer className={css["footer"]}>
      <div>
      <img className={css["logo"]} src={logo}/> 
      </div>
      <div className={css.left}>
      <div className={css.face}>
        <IconFace/>
      </div>
      <div className={css.instagram}>
        <IconInstagram/>
      </div>
      <div className={css.skype}>
        <IconSkype/>
      </div>

      </div>


     
    

    </footer>
  )
}

export default Footer