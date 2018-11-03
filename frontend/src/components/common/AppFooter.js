import React from 'react';

class AppFooter extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        iTrade © {new Date().getFullYear()}
        <br />
        build: { process.env.REACT_APP_BUILD_HASH ? process.env.REACT_APP_BUILD_HASH : 'local'}
      </div>
    )
  }
}

export default AppFooter;