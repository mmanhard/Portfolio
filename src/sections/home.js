import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "manhard-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id={'home'}>
      <div className={"column_ctr title_container"}>
        <h1>WELCOME.</h1>
      </div>

      <div id={"home_container"}>

        <div id={"portrait"}>
          <Img style={{borderRadius: 40}} fluid={data.portrait.childImageSharp.fluid} />
        </div>


        <h4 className={"home_page_content"}>My name is Michael Manhard.</h4>

        <p className={"home_page_content"}>
          I grew up, live, and work in and around Chicago.
        </p>

        <p className={"home_page_content"}>
          A recent convert from structural engineering, I’m a resourceful engineer
          in the midst of getting his hands dirty designing and building software.
        </p>

        <p id={"scroll_txt"}>
          Scroll to see some of my work.
        </p>
        <a className={"column_ctr"} id={"down_icon"} href="#projects">
          <FontAwesomeIcon icon={faLevelDownAlt} />
        </a>

      </div>
    </section>
  );
}

export default Home;
