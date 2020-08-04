import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My name is Michael Manhard.</h1>
    <p>I'm a software engineer from Chicago, IL.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">Projects</Link>
    <Link to="/contact/">Contact Me</Link>
  </Layout>
)

export default IndexPage
