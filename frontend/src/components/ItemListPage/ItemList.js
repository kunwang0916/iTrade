import React from 'react';
import { List } from 'antd';
import ItemListCard from './ItemListCard';

const tileData = [
  {
    images:[
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

class ItemList extends React.Component {

  render() {
    return (
      <div style={{ maxWidth: 500, display: 'flex', textAlign: 'center' }}>
        <List
          grid={{ gutter: 0, xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          split={true}
          dataSource={tileData}
          renderItem={item => (
            <List.Item>
              <ItemListCard item={item} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ItemList;
