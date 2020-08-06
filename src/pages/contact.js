import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <h1>Let's get in touch!</h1>
    <a style={{margin: 10}} href="https://www.linkedin.com/in/michael-m-manhard/">LinkedIn</a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/">Github</a>
    <Link style={{margin: 10}} to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact;
