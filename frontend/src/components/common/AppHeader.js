import React from 'react';
import {
  Layout,
} from 'antd';

class AppHeader extends React.Component {

  render () {
    const {
      title,
    } = this.props;

    return (
      <Layout.Header style={{ textAlign: 'center', background: '#f0f2f5', color: '#333333', fontWeight: 'bold'}}>
        {title}
      </Layout.Header>
    )
  }
}

export default AppHeader;