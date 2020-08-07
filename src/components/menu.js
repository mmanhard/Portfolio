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
          <Link className={"menu_btn"} to="/">
            HOME
          </Link>
          <Link className={"menu_btn"} to="/projects/">
            PROJECTS
          </Link>
          <Link className={"menu_btn"} to="/now/">
            NOW
          </Link>
          <Link className={"menu_btn"} to="/resume/">
            RESUME
          </Link>
        </div>
      </nav>
    );

  } else {
    return (
      <nav className={"menu"}>
        <button
          onClick={toggleOpen}
          id={"menu_nav_btn"} className={"nav_btn"}>
          MENU
        </button>
      </nav>
    );
  }

}

export default Menu;
