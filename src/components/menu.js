import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Menu = ({isOpen, toggleOpen, clickMenuItem}) => {

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
            <button onClick={() => { clickMenuItem('home') }}
              className={"menu_btn"}>
              HOME
            </button>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <button onClick={() => { clickMenuItem('projects') }}
              className={"menu_btn"}>
              PROJECTS
            </button>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <button onClick={() => { clickMenuItem('now') }}
              className={"menu_btn"}>
              NOW
            </button>
          </div>

          <div className={"column_ctr menu_btn_bg"}>
            <button onClick={() => { clickMenuItem('resume') }}
              className={"menu_btn"}>
              RESUME
            </button>
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
