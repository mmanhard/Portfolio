import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Menu = ({isOpen, toggleOpen, clickMenuItem}) => {

  let content;
  if (isOpen) {
    content = (
      <>
        <button
          onClick={toggleOpen}
          id={"menu_nav_btn"} className={"nav_btn"}>
          <FontAwesomeIcon style={{width: 30, height: 30}} icon={faTimes} />
        </button>

        <div id={"menu_btns"}>

          <button onClick={() => { clickMenuItem('home') }}
            className={"menu_btn"}>
            HOME
          </button>

          <button onClick={() => { clickMenuItem('projects') }}
            className={"menu_btn"}>
            PROJECTS
          </button>

          <button onClick={() => { clickMenuItem('now') }}
            className={"menu_btn"}>
            NOW
          </button>

          <button onClick={() => { clickMenuItem('resume') }}
            className={"menu_btn"}>
            RESUME
          </button>

        </div>
      </>
    );

  } else {
    content = (
      <div className={"rotate_neg_90 menu_btn_bg column_ctr"}>
        <button
          onClick={toggleOpen} className={"nav_btn"}>
          MENU
        </button>
      </div>
    );
  }

  return (
    <nav id={"menu"} className={isOpen ? "menu_open" : 'menu'}>
      {content}
    </nav>
  )

}

export default Menu;
