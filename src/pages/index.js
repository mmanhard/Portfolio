import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = () => {
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
    <Layout>

      <div className={"column_ctr title_container"}>
        <h1>WELCOME.</h1>
      </div>

      <div className={"column_ctr"} id={"home_container"}>

        <div style={{ width: `400px`, borderRadius: 40, marginTop: 80, marginBottom: `1.45rem` }}>
          <Img style={{borderRadius: 40}} fluid={data.portrait.childImageSharp.fluid} />
        </div>

        <h3 style={{width: 380, marginLeft: 20, textAlign: 'left'}}>My name is Michael Manhard.</h3>

        <p style={{width: 380, marginLeft: 20}}>
          I grew up, live, and work in and around Chicago.
        </p>

        <p style={{width: 380, marginLeft: 20}}>
          A recent convert from structural engineering, I’m a resourceful engineer
          in the midst of getting his hands dirty designing and building software.
        </p>

      </div>

    </Layout>
  );
}

export default IndexPage;
