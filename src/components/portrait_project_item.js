import React from "react"
import Img from "gatsby-image"

const PortraitProjectItem = ({title, description, techStack, images, links, displayVideo}) => (
  <div className={"portrait_container"}>
    <div className={"portait_content"}>

      <h2>{title}</h2>

      <p>{description}</p>

      {techStack.map(({ section, tech}) => (
        <p key={title + section}>{`${section}:\t${tech}`}</p>
      ))}

      <div className={'visible_small'}>
        <PortraitImages title={title} images={images} />
      </div>

      <div className={"row_space portrait_btns"}>
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

    <div className={'not_visible_small'}>
      <PortraitImages title={title} images={images} />
    </div>
  </div>
)

const PortraitImages = ({ title, images }) => (
  <>
    {images.map((image, index) => (
      <div key={title + index} className={index > 0 ? "second_img portrait_img" : "portrait_img"}>
        {image && <Img className={"project_img"} fluid={image.childImageSharp.fluid} />}
      </div>
    ))}
  </>
)

export default PortraitProjectItem;
