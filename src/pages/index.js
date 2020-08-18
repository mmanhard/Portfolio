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
    };

  }

  displayVideo = (projectTitle) => {
    this.setState({ projectTitle, isVideoOpen: true });
  }

  closeVideo = () => {
    this.setState({ projectTitle: undefined, isVideoOpen: false });
  }

  render() {
    const { isVideoOpen, projectTitle } = this.state;


    return (
      <Layout isVideoOpen={isVideoOpen} closeVideo={this.closeVideo}>

        <Home />
        <Projects displayVideo={this.displayVideo} />
        <Now />
        <Resume />

        {(isVideoOpen && projectTitle) &&
          <VideoLayout
            projectTitle={projectTitle}
            closeVideo={this.closeVideo} />}

      </Layout>
    );
  }
}

export default IndexPage;
