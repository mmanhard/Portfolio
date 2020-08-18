import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import LandscapeProjectItem from "../components/landscape_project_item"
import PortraitProjectItem from "../components/portrait_project_item"

const Projects = ({ displayVideo, allowScroll }) => {
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
      },
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
    <section id={'projects'}>

      <div id={"projects_container"} className={allowScroll ? "projects_container" : "projects_container no_scroll"}>

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

        <hr />

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
          images={[]}
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

export default Projects;
