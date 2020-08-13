import React from "react"
import Img from "gatsby-image"

const PortraitProjectItem = ({title, description, techStack, images, links, displayVideo}) => (
  <div className={"portrait_container"}>
    <div style={{flex: 1}}>
      <h2>{title}</h2>
      <p>{description}</p>
      {techStack.map(({ section, tech}) => (
        <p key={title + section}>{`${section}:\t${tech}`}</p>
      ))}
      <div className={"row_space"}>
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
    {images.map((image, index) => (
      <div key={title + index} className={index > 0 ? "second_img" : ""} style={{ width: `165px`, marginLeft: 20, marginBottom: `1.45rem` }}>
        {image && <Img className={"project_img"} fluid={image.childImageSharp.fluid} />}
      </div>
    ))}
  </div>
)

export default PortraitProjectItem;
