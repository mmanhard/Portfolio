import React from "react"

const Header = ({ toggleMenu, closeMenu }) => {
  return (
    <header>
        <a
          onClick={closeMenu}
          className={"nav_btn menu_btn_bg column_ctr"}
          href="/#home"
        >
          {`M M A N H A R D`}
        </a>

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
