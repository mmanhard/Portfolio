import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PortraitProjectItem from "../components/portrait_project_item"

const Projects0 = ({ displayVideo }) => {
  const data = useStaticQuery(graphql`
    query {
      fresh_focus_img_1: file(relativePath: { eq: "Fresh-Focus-1.png" }) {
        childImageSharp {
          fluid(maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fresh_focus_img_2: file(relativePath: { eq: "Fresh-Focus-2.png" }) {
        childImageSharp {
          fluid(maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section id={'projects0'}>

      <div id={"projects0_container"} className={"projects_container"}>

        <PortraitProjectItem
          title={"Fresh Focus"}
          description={"Short description of what the app does goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero neque, lobortis eget interdum non, laoreet id nisi."}
          techStack={[
              { section: "Front End",
                tech: "React.JS",
              },
              { section: "Back End",
                tech: "React.JS",
              }]}
          images={[data.fresh_focus_img_1, data.fresh_focus_img_2]}
          links={[
              {
                href: "https://github.com/mmanhard/FreshFocus",
                text: "SOURCE",
              }]}
          displayVideo={displayVideo} />

        <hr />

        <PortraitProjectItem
          title={"This Portfolio"}
          description={"Short description of what the app does goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero neque, lobortis eget interdum non, laoreet id nisi."}
          techStack={[
              { section: "Front End",
                tech: "React.JS",
              },
              { section: "Back End",
                tech: "React.JS",
              }]}
          images={[data.pain_control_img]}
          links={[
              { href: "http://mmanhard.com/",
                text: "LIVE",
              },
              {
                href: "https://github.com/mmanhard/Portfolio",
                text: "SOURCE",
              }]} />

      </div>

      <div className={"column_ctr title_container"}>
        <h1>PROJECTS.</h1>
      </div>

    </section>
  );
}

export default Projects0;
