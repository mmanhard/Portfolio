import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import VideoLayout from "../components/video_layout"

const Projects0 = () => {
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
    <section id={'projects0'}>

      <div id={"projects_container"}>
      
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
              }]} />

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

const LandscapeProjectItem = ({title, description, techStack, image, links}) => (
  <div className={"column_ctr landscape_container"}>
    <div className={"landscape_content"}>
      <div className={"landscape_description"}>
        <h2>{title}</h2>
        <p>{description}</p>
        {techStack.map(({ section, tech}) => (
          <p key={title + section} style={{marginBottom: 0}}>{`${section}:\t${tech}`}</p>
        ))}
      </div>

      <div className={"landscape_img"}>
        <Img className={"project_img"} fluid={image.childImageSharp.fluid} />
      </div>
    </div>

    <div>
      {links.map(({href, text}) => (
        <a key={href} className={"project_btn"} href={href}>
          <div className={"column_ctr"} style={{height: 16}}>VIEW</div>
          <div className={"column_ctr"} style={{height: 16}}>{text}</div>
        </a>
      ))}
    </div>
  </div>
)

const PortraitProjectItem = ({title, description, techStack, images, links}) => (
  <div className={"portrait_container"}>
    <div style={{flex: 1}}>
      <h2>{title}</h2>
      <p>{description}</p>
      {techStack.map(({ section, tech}) => (
        <p key={title + section}>{`${section}:\t${tech}`}</p>
      ))}
      {links.map(({href, text}) => (
        <a key={href} className={"project_btn"} href={href}>
          <div className={"column_ctr"} style={{height: 16}}>VIEW</div>
          <div className={"column_ctr"} style={{height: 16}}>{text}</div>
        </a>
      ))}
    </div>
    {images.map((image, index) => (
      <div key={title + index} className={index > 0 ? "second_img" : ""} style={{ width: `165px`, marginLeft: 20, marginBottom: `1.45rem` }}>
        <Img className={"project_img"} fluid={image.childImageSharp.fluid} />
      </div>
    ))}
  </div>
)

export default Projects0;
