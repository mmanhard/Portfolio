import React from "react"
import Img from "gatsby-image"

const LandscapeProjectItem = ({title, description, techStack, image, links, displayVideo}) => (
  <div className={"column_ctr landscape_container"}>
    <div className={"landscape_content"}>
      <div className={"landscape_description"}>
        <h2>{title}</h2>
        <p>{description}</p>
        {techStack.map(({ section, tech}) => (
          <p key={title + section} style={{marginBottom: 0}}>{`${section}:\t${tech}`}</p>
        ))}
      </div>

      {image && <div className={"landscape_img"}>
        <Img className={"project_img"} fluid={image.childImageSharp.fluid} />
      </div>}
    </div>

    <div className={"row_space"} style={{flexWrap: 'wrap', marginBottom: 0}}>
      {links.map(({href, text}) => (
        <a key={href} className={"project_btn"} href={href}>
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
