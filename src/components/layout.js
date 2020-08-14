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
      isVideoOpen: false,
    };

    this.isScrolling = false;
    this.yStart = 0;
    this.yEnd = 0;
  }

  componentDidMount() {
    this.scrollListener = document.addEventListener("wheel", this._handleScroll);
    document.addEventListener('touchstart', this._handleTouchStart, false);
    document.addEventListener('touchend', this._handleTouchEnd, false);
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

  _handleTouchStart = (e) => {
    this.yStart = e.touches[0].clientY;
  }

  _handleTouchEnd = (e) => {
    this.yEnd = e.changedTouches[0].clientY;
    this._handleDelta(this.yStart-this.yEnd, 5000);
  }

  _handleScroll = (e) => {
    const { curSection } = this.state;

    if (curSection === 'projects') {
      const {scrollHeight, scrollTop, clientHeight} = document.getElementById("projects_container");
      const scrollLeft = scrollHeight - scrollTop - clientHeight;

      if ((scrollLeft <= 0 && e.deltaY > 0) || (scrollTop <= 0 && e.deltaY < 0)) {
        this._handleDelta(e.deltaY, 5);
      }
    } else if (curSection === 'projects0') {
      const {scrollHeight, scrollTop, clientHeight} = document.getElementById("projects0_container");
      const scrollLeft = scrollHeight - scrollTop - clientHeight;

      if ((scrollLeft <= 0 && e.deltaY > 0) || (scrollTop <= 0 && e.deltaY < 0)) {
        this._handleDelta(e.deltaY, 5);
      }
    } else {
      this._handleDelta(e.deltaY, 5);
    }
  }

  _handleDelta = (deltaY, threshold) => {
    const { isVideoOpen } = this.props;
    const { curSection, cameFromMenu } = this.state;

    const main = document.getElementById("main_container");

    if (!isVideoOpen && !this.isScrolling && !cameFromMenu) {
      if (deltaY > threshold && nextSections[curSection]) {
        const nextSection = document.getElementById(nextSections[curSection]);
        this.isScrolling = true;
        this._scrollDownToSection(main, nextSection);
      } else if (deltaY < (-1 * threshold) && prevSections[curSection]) {
        const prevSection = document.getElementById(prevSections[curSection]);
        this.isScrolling = true;
        this._scrollUpToSection(main, prevSection);
      }
    } else if (cameFromMenu) {
      setTimeout(() => this.setState({cameFromMenu: false}), 1000);
    }
  }

  toggleMenu = () => {
    this.props.closeVideo();
    this.setState((prevState) => (
      { isMenuOpen: !prevState.isMenuOpen }
    ));
  }

  clickMenuItem = (curSection) => {
    this.props.closeVideo();
    this.setState({cameFromMenu: true, curSection});
    this.toggleMenu();
  }

  render() {
    const { children, closeVideo } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <>
        <Header
          closeMenu={() => {
            closeVideo();
            if (isMenuOpen) this.toggleMenu(); }}
          toggleMenu={this.toggleMenu}/>
        <main
          id={"main_container"}
          onScroll={this._handleScroll}>
          {children}
        </main>
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
