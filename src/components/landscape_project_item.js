import React from "react"
import Img from "gatsby-image"

const LandscapeProjectItem = ({title, platform, type, description, techStack, image, links, displayVideo}) => (
  <div className={"column_ctr landscape_container"}>
    <div className={"landscape_content"}>
      <div className={"landscape_description"}>

        <h2 style={{marginBottom: 4}}>{title}<span>{platform}</span></h2>
        <h5 style={{marginBottom: 4}}>{type}</h5>

        <p className={"project_description"}>{description}</p>

        {techStack.map(({ section, tech}) => (
          <p key={title + section}
            className={"project_description"}
            style={{marginBottom: 0}}>
            <span>{`${section}:    `}</span>
            <strong>{tech}</strong>
          </p>
        ))}

      </div>

      {image && <div className={"landscape_img"}>
        <Img className={"project_img"} fluid={image.childImageSharp.fluid} />
      </div>}
    </div>

    <div className={"row_space"} style={{flexWrap: 'wrap', marginBottom: 0}}>
      {links.map(({href, text}) => (
        <a key={href} className={"project_btn"} href={href} target="_blank">
          <div className={"column_ctr"} style={{height: 16}}>VIEW</div>
          <div className={"column_ctr"} style={{height: 16}}>{text}</div>
        </a>
      ))}
      {displayVideo && <button onClick={() => { displayVideo(title)}} className={"project_btn"}>
        <div className={"column_ctr"} style={{height: 16}}>VIEW</div>
        <div className={"column_ctr"} style={{height: 16}}>DEMO</div>
      </button>}
    </div>
  </div>
)

export default LandscapeProjectItem;
