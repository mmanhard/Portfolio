import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
  <nav className={"sidebar"}>
    <a style={{margin: 10}} href="https://www.linkedin.com/in/michael-m-manhard/">
      <FontAwesomeIcon style={{width: 30, height: 30}} icon={faLinkedin} />
    </a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/">
      <FontAwesomeIcon style={{width: 30, height: 30}} icon={faGithub} />
    </a>
  </nav>
)

export default Sidebar;
