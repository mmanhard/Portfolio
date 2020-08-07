import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header>
        <Link
          className={"nav_btn"}
          to="/"
          style={{marginLeft: 10}}
        >
          {`M M A N H A R D`}
        </Link>
    </header>
  );
}

export default Header;
