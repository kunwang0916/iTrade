import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

import {
  Layout
} from 'antd';


class BasicLayout extends React.Component {
  render() {
    const { content, title } = this.props || {};
    return (
      <Layout>
        <AppHeader title={title} />
        <Layout.Content> {content} </Layout.Content>
        <AppFooter />
      </Layout>
    );
  }
}

export default BasicLayout;