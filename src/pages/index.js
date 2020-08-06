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
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>My name is Michael Manhard.</h1>
      <p>I'm a software engineer from Chicago, IL.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <Link style={{margin: 10}} to="/projects/">
      </Link>
      <Link style={{margin: 10}} to="/contact/">
        Contacts
      </Link>

      <a style={{margin: 10}} href="https://www.linkedin.com/in/michael-m-manhard/">
        <FontAwesomeIcon style={{width: 30, height: 30}} icon={faLinkedin} />
      </a>
      <a style={{margin: 10}} href="https://github.com/mmanhard/">
        <FontAwesomeIcon style={{width: 30, height: 30}} icon={faGithub} />
      </a>
    </Layout>
  );
}

export default IndexPage;
