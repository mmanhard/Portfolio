import { Link } from "gatsby"
import React from "react"

const Header = ({ toggleMenu }) => {
  return (
    <header>
        <Link
          className={"nav_btn menu_btn_bg column_ctr"}
          to="/"
        >
          {`M M A N H A R D`}
        </Link>

        <div className={"menu_header menu_btn_bg column_ctr"}>
          <button
            onClick={toggleMenu}
            className={"nav_btn"}>
            M E N U
          </button>
        </div>
    </header>
  );
}

export default Header;
