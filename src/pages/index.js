import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Home from "../sections/home"
import Now from "../sections/now"
import Projects from "../sections/projects"
import Resume from "../sections/resume"

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>

        <Home />
        <Projects />
        <Now />
        <Resume />

      </Layout>
    );
  }
}

export default IndexPage;
