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
      isVideoOpen: false,
    };
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

    main.scrollTo({
      top: main.clientHeight * sectionMap[section]
    });
  }

  render() {
    const { children, closeVideo } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <>
        <Header
          clickHome={this.clickHome}
          toggleMenu={this.toggleMenu}/>
        <main
          id={"main_container"}
          onScroll={this._handleScroll}>
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
