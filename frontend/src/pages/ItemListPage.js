import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ItemList from '../components/ItemListPage/ItemList';

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
  render() {
    const content = (
      <React.Fragment>
        <ItemList items={tileData} />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"iTrade"} />
    );
  }
}

export default ItemListPage;