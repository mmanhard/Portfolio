import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

import "./layout.css"

const VideoLayout = ({ projectTitle, closeVideo }) => {
  const { width, height } = projectDimRatios[projectTitle];

  return (
    <div className={'video_overlay column_ctr'}>

      <div className={'column_space video_content'}>
        <div id={"video_container"} style={{paddingTop: height, width}}>
          <iframe
            title={projectTitle}
            src={projectToURL[projectTitle]}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true} />
        </div>
        <h1 style={{marginBottom: 20}}>{projectTitle}</h1>
        <button id={"video_close_btn"} onClick={closeVideo} style={{marginBottom: 20}}>
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
  'Pain Control': "https://www.youtube.com/embed/md52E5fJaUE?autoplay=1",
  'Touche': "https://www.youtube.com/embed/md52E5fJaUE?autoplay=1",
  'Fresh Focus': "https://www.youtube.com/embed/yAW-TZSDn6A?autoplay=1"
}

const projectDimRatios = {
  'Pain Control': {
    height: '60%',
    width: '90%',
  },
  'Touche': {
    height: '60%',
    width: '90%',
  },
  'Fresh Focus': {
    height: '60%',
    width: '50%',
  },
}

export default VideoLayout;
