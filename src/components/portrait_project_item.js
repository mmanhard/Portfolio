import React from "react"
import Img from "gatsby-image"

const PortraitProjectItem = ({title, platform, type, description, techStack, images, links, displayVideo, isMobile}) => (
  <div className={"portrait_container"}>
    <div className={"portait_content"}>

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

      <div className={'visible_small'}>
        <PortraitImages title={title} images={images} isMobile={isMobile} />
      </div>

      <div className={"row_space portrait_btns"}>
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

    <div className={'not_visible_small'}>
      <PortraitImages title={title} images={images} isMobile={isMobile} />
    </div>
  </div>
)

const PortraitImages = ({ title, images, isMobile }) => (
  <>
    {images.map((image, index) => (
      <div key={title + index} className={index > 0 ? "second_img portrait_img" : "portrait_img"}>
        {image && <Img className={isMobile ? "mobile_img" : "project_img"} fluid={image.childImageSharp.fluid} />}
      </div>
    ))}
  </>
)

export default PortraitProjectItem;
