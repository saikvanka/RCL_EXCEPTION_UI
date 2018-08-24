import React, { Component } from 'react';
import SidebarContainer from './containers/sidebar.component'
import HeaderContainer from './containers/header.component';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <SidebarContainer/>
      </div>
    );
  }
}
