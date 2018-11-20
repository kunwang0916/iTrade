import React from 'react';

import { Layout } from 'antd';

class AppFooter extends React.Component {
  render () {
    return (
      <Layout.Footer style={{ textAlign: 'center' }}>
        iTrade © {new Date().getFullYear()}
        <br />
        build: { process.env.REACT_APP_BUILD_HASH ? process.env.REACT_APP_BUILD_HASH : 'local'}
      </Layout.Footer>
    )
  }
}

export default AppFooter;