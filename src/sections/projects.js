import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import LandscapeProjectItem from "../components/landscape_project_item"
import PortraitProjectItem from "../components/portrait_project_item"

const Projects = ({ displayVideo }) => {
  const data = useStaticQuery(graphql`
    query {
      pain_control_img: file(relativePath: { eq: "Pain-Control-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
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
      }
    }
  `);

  return (
    <section id={'projects'}>

      <div id={"projects_container"} className={"projects_container"}>

        <LandscapeProjectItem
          title={"Pain Control"}
          platform={"Web App"}
          description={"Pain Control gives users the ability to track their pain levels over time. Users enter their pain levels over the course of a day. Pain Control maps out how each of the user's pain points have changed throughout the day and over time. This information empowers users by helping them make insights about their pain and giving them an effective tool to communicate their pain history to doctors."}
          techStack={[
              { section: "Front End",
                tech: "Javascript + React + Express",
              },
              { section: "Back End",
                tech: "Python + Flask + MongoDB",
              },
              {
                section: "Tools",
                tech: "Heroku + Webpack",
              }]}
          image={data.pain_control_img}
          links={[
              {
                href: "http://mypaincontroller.com/",
                text: "LIVE",
              },
              {
                href: "https://github.com/mmanhard/pain_control_app",
                text: "SOURCE (FE)",
              },
              {
                href: "https://github.com/mmanhard/pain_control_backend",
                text: "SOURCE (BE)",
              }]}
            displayVideo={displayVideo} />

        <hr />

        <PortraitProjectItem
          title={"Touché"}
          platform={"iOS App"}
          description={"Ever been at dinner with friends and someone asks, \"Are hot dogs sandwiches, tacos, or something else entirely?\". Google doesn't have an answer for that, so that's where Touché comes in. Type in a question, get votes from people like you, prove your friends you were right. Touché."}
          techStack={[
              { section: "Front End",
                tech: "Swift",
              },
              { section: "Back End",
                tech: "Python +  Flask + PostgreSQL",
              }]}
          images={[data.touche_img_1, data.touche_img_2]}
          links={[
              {
                href: "https://github.com/mmanhard/Touche",
                text: "SOURCE",
              }]}
          displayVideo={displayVideo} />

      </div>

      <div className={"column_ctr title_container"}>
        <h1>PROJECTS.</h1>
      </div>

    </section>
  );
}

export default Projects;
