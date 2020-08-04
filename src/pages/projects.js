import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Check out my projects here</h1>
    <a style={{margin: 10}} href="http://mypaincontroller.com/">Pain Control Live</a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/pain_control_app">Pain Control Source Frontend</a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/pain_control_backend">Pain Control Source Backend</a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/Touche">Touche</a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/FreshFocus">Fresh Focus</a>
    <a style={{margin: 10}} href="http://mmanhard.com/">My Portfolio Live</a>
    <a style={{margin: 10}} href="https://github.com/mmanhard/Portfolio">My Portfolio Source</a>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects;
