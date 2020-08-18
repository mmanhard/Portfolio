import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Menu from "./menu"
import Sidebar from "./sidebar"
import "./layout.css"

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isVideoOpen: false
    };
  }

  componentDidMount() {
    const main = document.getElementById('main_container');
    this.scrollListener = main.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    const { allowProjectScroll, allowResumeScroll } = this.props;

    const main = document.getElementById("main_container");
    const projectOriginTop = (400 + main.clientHeight) * sectionMap['projects'];
    const resumeOriginTop = (400 + main.clientHeight) * sectionMap['resume'];

    if (allowProjectScroll && main.scrollTop < projectOriginTop) {
      this.props.setProjectScroll(false);
    } else if (!allowProjectScroll && main.scrollTop >= projectOriginTop) {
      this.props.setProjectScroll(true);
    }

    if (allowResumeScroll && main.scrollTop < resumeOriginTop) {
      this.props.setResumeScroll(false);
    } else if (!allowResumeScroll && main.scrollTop >= resumeOriginTop) {
      this.props.setResumeScroll(true);
    }
  }

  toggleMenu = () => {
    this.props.closeVideo();
    this.setState((prevState) => (
      { isMenuOpen: !prevState.isMenuOpen }
    ));
  }

  clickMenuItem = (section) => {
    this.setState({cameFromMenu: true});
    this.toggleMenu();
    this.goToSection(section);
  }

  clickHome = () => {
    const { isMenuOpen } = this.state;

    this.setState({cameFromMenu: true});

    if (isMenuOpen) this.toggleMenu();
    this.props.closeVideo();

    this.goToSection('home');
  }

  goToSection = (section) => {
    const main = document.getElementById('main_container');
    const content = document.getElementById(`${section}_container`);

    main.scrollTo({
      top: (400 + main.clientHeight) * sectionMap[section]
    });

    content.scrollTo({
      top: 0
    });
  }

  render() {
    const { children } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <>
        <Header
          clickHome={this.clickHome}
          toggleMenu={this.toggleMenu}/>
        <main
          id={"main_container"}>
          {children}
        </main>
        <div id={"menu_overlay"} className={isMenuOpen ? 'menu_overlay_open' : ''} />
        <Menu
          isOpen={isMenuOpen}
          clickMenuItem={this.clickMenuItem}
          toggleOpen={this.toggleMenu}/>
        <Sidebar />
      </>
    );
  }
}

const sectionMap = {
  'home': 0,
  'projects': 1,
  'now': 2,
  'resume': 3,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
