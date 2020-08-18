import React from "react"

const Header = ({ toggleMenu, clickHome }) => {
  return (
    <header>
      <div className={"menu_btn_bg"}>
        <button
          onClick={clickHome}
          className={"nav_btn"}
          style={{position: 'relative', top: -8}}>
          {`M M A N H A R D`}
        </button>
      </div>

      <div className={"menu_header menu_btn_bg"}>
        <button
          onClick={toggleMenu}
          className={"nav_btn"}
          style={{position: 'relative', top: -8}}>
          M E N U
        </button>
      </div>
    </header>
  );
}

export default Header;
