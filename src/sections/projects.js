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
          description={"Short description of what the app does goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero neque, lobortis eget interdum non, laoreet id nisi."}
          techStack={[
              { section: "Front End",
                tech: "Javascript + React + Express",
              },
              { section: "Back End",
                tech: "Python + Flask + MongoDB",
              },
              {
                section: "Tooling",
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
          title={"Touche"}
          description={"Short description of what the app does goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero neque, lobortis eget interdum non, laoreet id nisi."}
          techStack={[
              { section: "Front End",
                tech: "React.JS",
              },
              { section: "Back End",
                tech: "React.JS",
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
