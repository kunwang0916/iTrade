import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';

class ItemListPage extends Component {
  render() {
    const content = (
      <div>
        ItemListPage
      </div>
    )
    return (
      <BasicLayout content={content} />
    );
  }
}

export default ItemListPage;