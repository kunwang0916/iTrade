import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ItemList from '../components/ItemListPage/ItemList';

import DatabaseUtils from '../utils/DatabaseUtils';
import { Spin } from 'antd';

const tileData = [
  {
    images: [
      "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
    ],
    title: 'Fujifilm camera',
    subTitle: '$72.00',
  },
  {
    images: [
      "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
    ],
    title: 'Fujifilm camera',
    subTitle: '$72.00',
  },
  {
    images: [
      "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
    ],
    title: 'Fujifilm camera',
    subTitle: '$72.00',
  },
  {
    images: [
      "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
    ],
    title: 'Fujifilm camera',
    subTitle: '$72.00',
  },
  {
    images: [
      "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
    ],
    title: 'Fujifilm camera',
    subTitle: '$72.00',
  },
];

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
      console.log('loaded items', items);
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
        { loading ? <Spin /> : null }
        <ItemList items={items} />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"iTrade"} />
    );
  }
}

export default ItemListPage;