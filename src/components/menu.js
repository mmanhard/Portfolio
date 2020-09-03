import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

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

          <div className={"row_space contact_menu_btns"}>
            <a className={"sidebar_btn column_ctr"}
              href="https://www.linkedin.com/in/michael-m-manhard/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon style={{width: 28, height: 28}} icon={faLinkedin} />
            </a>
            <a className={"sidebar_btn column_ctr"}
              href="https://github.com/mmanhard/"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon style={{width: 28, height: 28}} icon={faGithub} />
            </a>
            <a className={"sidebar_btn column_ctr"}
              href="mailto:mmanhard93@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon style={{width: 26, height: 26}} icon={faEnvelope} />
            </a>
          </div>
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
