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
    };
  }

  render() {
    const { children } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <>
        <Header />
        <main>{children}</main>
        {isMenuOpen && <div className={'menu_overlay'} />}
        <Menu
          isOpen={isMenuOpen}
          toggleOpen={() => { this.setState({isMenuOpen: !isMenuOpen})}}/>
        <Sidebar />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
