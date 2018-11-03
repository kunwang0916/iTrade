import React, { Component } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

class BasicLayout extends Component {
  render() {
    const { content, title } = this.props || {};
    return (
      <React.Fragment style={{minHeight: '100vh'}}>
        <AppHeader title={title} />
        { content }
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default BasicLayout;