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
          platform={"Chrome Extension"}
          description={"Fresh Focus implements the Pomodoro method but takes it one step further: website blocking while in the middle of a session. Configure your Pomodoro session, start the timer, and your most distracting sites will be out of reach until the timer is done."}
          techStack={[
              { section: "Built With",
                tech: "Vanilla JS + CSS + HTML",
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
          platform={"Web App"}
          description={"This portfolio was built with the sole intention of showing my skills in the field of software engineering. It's built with GatsbyJS for one reason: speed. At build time, this site is rendered to static HTML and CSS. Once a user visits the site, a pre-packaged Javascript bundle is loaded asynchonously. Images are lazy loaded and queried using GraphQL."}
          techStack={[
              { section: "Front End",
                tech: "React.JS + Gatsby",
              },
              { section: "Database",
                tech: "GraphQL",
              },
              {
                section: "Deployment",
                tech: "AWS S3",
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
