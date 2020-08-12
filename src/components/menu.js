import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Menu = ({isOpen, toggleOpen}) => {

  if (isOpen) {
    return (
      <nav className={"menu_open"}>
        <button
          onClick={toggleOpen}
          id={"menu_nav_btn"} className={"nav_btn"}>
          <FontAwesomeIcon style={{width: 30, height: 30}} icon={faTimes} />
        </button>

        <div id={"menu_btns"}>

          <div className={"column_ctr menu_btn_bg"}>
            <a onClick={toggleOpen} className={"menu_btn"} href="/#home">
              HOME
            </a>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <a onClick={toggleOpen} className={"menu_btn"} href="/#projects">
              PROJECTS
            </a>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <a onClick={toggleOpen} className={"menu_btn"} href="/#now">
              NOW
            </a>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <a onClick={toggleOpen} className={"menu_btn"} href="/#resume">
              RESUME
            </a>
          </div>

        </div>
      </nav>
    );

  } else {
    return (
      <nav className={"menu"}>
        <div className={"rotate_neg_90 menu_btn_bg column_ctr"}>
          <button
            onClick={toggleOpen} className={"nav_btn"}>
            MENU
          </button>
        </div>
      </nav>
    );
  }

}

export default Menu;
