import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
        <Link
          className={"nav_btn"}
          to="/"
          style={{marginLeft: 10}}
        >
          {data.site.siteMetadata.title}
        </Link>
    </header>
  );
}

export default Header;
