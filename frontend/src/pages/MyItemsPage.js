import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ItemList, { ItemListType } from '../components/ItemListPage/ItemList';
import {
  Button,
  Spin,
} from 'antd';
import {
  Link
} from 'react-router-dom';
import DatabaseUtils from '../utils/DatabaseUtils';
import AccountUtils from '../utils/AccountUtils';

class MyItemsPage extends Component {
  state = {
    loading: false,
    items: [],
  };

  componentDidMount() {
    this.loadItemList();
  }

  loadItemList = () => {
    this.setState({
      loading: true,
    });
    const userId = AccountUtils.getUserID();
    DatabaseUtils.loadItemListByUserId(userId, (items) => {
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
        <Button type="primary" block style={{ margin: '10pt 0' }}>
          <Link to='addItem'>
          Add Item
          </Link>
        </Button>
       
        {loading ? <Spin /> : <ItemList items={items} type={ItemListType.MY_LIST}/>}
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"My Items"} />
    );
  }
}

export default MyItemsPage;