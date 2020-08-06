import React from "react";
import PropTypes from "prop-types";
import "./layout.css"

const VideoLayout = ({ projectTitle }) => {

  return (
    <>
      <iframe width="560" height="315"
        src={projectToURL[projectTitle]}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen={true} />
    </>
  )
}

VideoLayout.propTypes = {
  projectTitle: PropTypes.string.isRequired,
}

const projectToURL = {
  painControl: "https://www.youtube.com/embed/md52E5fJaUE",
  freshFocus: "https://www.youtube.com/embed/yAW-TZSDn6A"
}

export default VideoLayout;
