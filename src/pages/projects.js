import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import VideoLayout from "../components/video_layout"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      pain_control_img: file(relativePath: { eq: "Pain-Control-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      touche_img_1: file(relativePath: { eq: "Touche-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      touche_img_2: file(relativePath: { eq: "Touche-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fresh_focus_img_1: file(relativePath: { eq: "Fresh-Focus-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fresh_focus_img_2: file(relativePath: { eq: "Fresh-Focus-2.png" }) {
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
      <h1>Projects</h1>

      <>
        <h2>Pain Control</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.pain_control_img.childImageSharp.fluid} />
        </div>
        <VideoLayout projectTitle={'painControl'} />
        <a style={{margin: 10}} href="http://mypaincontroller.com/">View Live</a>
        <a style={{margin: 10}} href="https://github.com/mmanhard/pain_control_app">View Source (FE)</a>
        <a style={{margin: 10}} href="https://github.com/mmanhard/pain_control_backend">View Source (BE)</a>
      </>

      <>
        <h2>Touche</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.touche_img_1.childImageSharp.fluid} />
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.touche_img_2.childImageSharp.fluid} />
        </div>
        <a style={{margin: 10}} href="https://github.com/mmanhard/Touche">View Source</a>
      </>

      <>
        <h2>Fresh Focus</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.fresh_focus_img_1.childImageSharp.fluid} />
        </div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.fresh_focus_img_2.childImageSharp.fluid} />
        </div>
        <VideoLayout projectTitle={'freshFocus'} />
        <a style={{margin: 10}} href="https://github.com/mmanhard/FreshFocus">View Source</a>
      </>

      <>
        <h2>This Portfolio</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.pain_control_img.childImageSharp.fluid} />
        </div>
        <a style={{margin: 10}} href="http://mmanhard.com/">View Live</a>
        <a style={{margin: 10}} href="https://github.com/mmanhard/Portfolio">View Source</a>
      </>

    </Layout>
  );
}

export default Projects;
