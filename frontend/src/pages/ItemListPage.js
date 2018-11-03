import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ItemList from '../components/ItemListPage/ItemList';

class ItemListPage extends Component {
  render() {
    const content = (
      <React.Fragment>
        <ItemList />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"Home"} />
    );
  }
}

export default ItemListPage;