import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ItemList from '../components/ItemListPage/ItemList';
import { Button } from 'antd';
import {
  Link
} from 'react-router-dom';

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

class MyItemsPage extends Component {
  render() {
    const content = (
      <React.Fragment>
        <Button type="primary" block style={{ marginBottom: '10pt' }}>
          <Link to='addItem'>
          Add Item
          </Link>
        </Button>
       
        <ItemList items={tileData} />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"My Items"} />
    );
  }
}

export default MyItemsPage;