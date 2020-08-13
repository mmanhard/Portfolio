import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Menu from "./menu"
import Sidebar from "./sidebar"
import "./layout.css"

const nextSections = {
  home: 'projects',
  projects: 'projects0',
  projects0: 'now',
  now: 'resume'
}

const prevSections = {
  projects: 'home',
  projects0: 'projects',
  now: 'projects0',
  resume: 'now'
}

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      curSection: 'home',
      intervalId: undefined,
    };

    this.isScrolling = false;
  }

  componentDidMount() {
    this.scrollListener = window.addEventListener("wheel", this._handleScroll);
  }

  _scrollDownToSection = (main, nextSection) => {

    const intervalId = setInterval(() => {
      if (main.scrollTop < nextSection.offsetTop - 25) {
        main.scrollTop += 25;
      } else if (main.scrollTop < nextSection.offsetTop) {
        main.scrollTop = nextSection.offsetTop;
      } else {
        clearInterval(this.state.intervalId);
        this.setState({curSection: nextSection.id});
        setTimeout(() => { this.isScrolling = false }, 500);
      }
    }, 15);

    this.setState({intervalId: intervalId});
  }

  _scrollUpToSection = (main, prevSection) => {

    const intervalId = setInterval(() => {
      if (main.scrollTop > prevSection.offsetTop + 25) {
        main.scrollTop -= 25;
      } else if (main.scrollTop > prevSection.offsetTop) {
        main.scrollTop = prevSection.offsetTop;
      } else {
        clearInterval(this.state.intervalId);
        this.setState({curSection: prevSection.id});
        setTimeout(() => { this.isScrolling = false }, 500);
      }
    }, 15);

    this.setState({intervalId: intervalId});
  }

  _handleScroll = (e) => {
    const { curSection, intervalId, cameFromMenu } = this.state;

    const main = document.getElementById("main_container");

    if (!this.isScrolling && !cameFromMenu) {
      if (e.deltaY > 4 && nextSections[curSection]) {
        const nextSection = document.getElementById(nextSections[curSection]);
        this.isScrolling = true;
        this._scrollDownToSection(main, nextSection);
      } else if (e.deltaY < -4 && prevSections[curSection]) {
        const prevSection = document.getElementById(prevSections[curSection]);
        this.isScrolling = true;
        this._scrollUpToSection(main, prevSection);
      }
    } else if (cameFromMenu) {
      setTimeout(() => this.setState({cameFromMenu: false}), 1000);
    }
  }

  toggleMenu = () => {
    this.setState((prevState) => (
      { isMenuOpen: !prevState.isMenuOpen }
    ));
  }

  clickMenuItem = (curSection) => {
    this.setState({cameFromMenu: true, curSection});
    this.toggleMenu();
  }

  render() {
    const { children } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <>
        <Header
          closeMenu={() => { if (isMenuOpen) this.toggleMenu() }}
          toggleMenu={this.toggleMenu}/>
        <main id={"main_container"} onScroll={this._handleScroll}>{children}</main>
        {isMenuOpen && <div className={'menu_overlay'} />}
        <Menu
          isOpen={isMenuOpen}
          clickMenuItem={this.clickMenuItem}
          toggleOpen={this.toggleMenu}/>
        <Sidebar />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
