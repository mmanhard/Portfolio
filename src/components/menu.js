import { Link } from "gatsby"
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

        <div className={"column_ctr"}>

          <div className={"column_ctr menu_btn_bg"}>
            <Link className={"menu_btn"} to="/">
              HOME
            </Link>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <Link className={"menu_btn"} to="/projects/">
              PROJECTS
            </Link>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <Link className={"menu_btn"} to="/now/">
              NOW
            </Link>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <Link className={"menu_btn"} to="/resume/">
              RESUME
            </Link>
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
