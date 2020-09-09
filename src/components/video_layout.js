import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

import "./layout.css"

const VideoLayout = ({ projectTitle, closeVideo }) => {
  const { width, height } = projectDimRatios[projectTitle];

  return (
    <div className={'video_overlay column_ctr'}>

      <div className={'column_ctr video_content'}>
        <div id={"video_container"}
          style={{minHeight: 400, minWidth: 300, paddingTop: height, width}}>
          <iframe
            title={projectTitle}
            src={projectToURL[projectTitle]}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} />
        </div>
        <h1 style={{marginLeft: 0, marginBottom: 20}}>{projectTitle}</h1>
        <button id={"video_close_btn"} onClick={closeVideo}>
          <FontAwesomeIcon style={{width: 30, height: 30, color: '#fff'}} icon={faTimesCircle} />
        </button>
      </div>
    </div>
  )
}

VideoLayout.propTypes = {
  projectTitle: PropTypes.string.isRequired,
}

const projectToURL = {
  'Pain Control': "https://www.youtube.com/embed/T4vL9IhOX-Y?autoplay=1",
  'Touché': "https://www.youtube.com/embed/g1BURNPrWfc?autoplay=1",
  'Fresh Focus': "https://www.youtube.com/embed/UNRK4iWmiGU?autoplay=1"
}

const projectDimRatios = {
  'Pain Control': {
    height: '60%',
    width: '90%',
  },
  'Touché': {
    height: '60%',
    width: '40%',
  },
  'Fresh Focus': {
    height: '60%',
    width: '90%',
  },
}

export default VideoLayout;
