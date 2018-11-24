import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ItemList, { ItemListType } from '../components/ItemListPage/ItemList';

import DatabaseUtils from '../utils/DatabaseUtils';
import { Spin } from 'antd';

class ItemListPage extends Component {
  state = {
    loading: false,
    items: [],
  };

  componentDidMount() {
    this.loadItemList();
  }

  loadItemList =()=> {
    this.setState({
      loading: true,
    });
    DatabaseUtils.loadItemList((items) => {
      this.setState({
        loading: false,
        items: items,
      });
    })
  }

  render() {
    const { loading, items } = this.state || {};

    const content = (
      <React.Fragment>
        { loading ? <Spin /> : <ItemList items={items} type={ItemListType.NORMAL_LIST}/> }
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"iTrade"} />
    );
  }
}

export default ItemListPage;