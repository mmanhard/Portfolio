import React from "react"

const Header = ({ toggleMenu, clickHome }) => {
  return (
    <header>
      <button
        onClick={clickHome}
        className={"nav_btn"}>
        {`M M A N H A R D`}
      </button>

      <button
        onClick={toggleMenu}
        className={"nav_btn menu_header"}>
        M E N U
      </button>
    </header>
  );
}

export default Header;
