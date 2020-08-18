import React from "react"

import Layout from "../components/layout"
import VideoLayout from "../components/video_layout"
import Home from "../sections/home"
import Now from "../sections/now"
import Projects from "../sections/projects"
import Resume from "../sections/resume"


class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectTitle: undefined,
      isVideoOpen: false,
      projectScroll: false,
      resumeScroll: false,
    };

  }

  displayVideo = (projectTitle) => {
    this.setState({ projectTitle, isVideoOpen: true });
  }

  closeVideo = () => {
    this.setState({ projectTitle: undefined, isVideoOpen: false });
  }

  setProjectScroll = (allowScroll) => {
    this.setState({ projectScroll: allowScroll });
  }

  setResumeScroll = (allowScroll) => {
    this.setState({ resumeScroll: allowScroll });
  }

  render() {
    const { isVideoOpen, projectTitle, projectScroll, resumeScroll } = this.state;


    return (
      <Layout
        isVideoOpen={isVideoOpen}
        closeVideo={this.closeVideo}
        allowProjectScroll={projectScroll}
        setProjectScroll={this.setProjectScroll}
        allowResumeScroll={resumeScroll}
        setResumeScroll={this.setResumeScroll}>

        <Home />
        <Projects allowScroll={projectScroll} displayVideo={this.displayVideo} />
        <Now />
        <Resume allowScroll={resumeScroll} />

        {(isVideoOpen && projectTitle) &&
          <VideoLayout
            projectTitle={projectTitle}
            closeVideo={this.closeVideo} />}

      </Layout>
    );
  }
}

export default IndexPage;
