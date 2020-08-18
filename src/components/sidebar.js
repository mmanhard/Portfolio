import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Sidebar = () => (
  <nav className={"sidebar"}>
    <a className={"sidebar_btn column_ctr"} href="https://www.linkedin.com/in/michael-m-manhard/">
      <FontAwesomeIcon style={{width: 28, height: 28}} icon={faLinkedin} />
    </a>
    <a className={"sidebar_btn column_ctr"} href="https://github.com/mmanhard/">
      <FontAwesomeIcon style={{width: 28, height: 28}} icon={faGithub} />
    </a>
    <a className={"sidebar_btn column_ctr"} href="mailto:mmanhard93@gmail.com">
      <FontAwesomeIcon style={{width: 26, height: 26}} icon={faEnvelope} />
    </a>
  </nav>
)

export default Sidebar;
