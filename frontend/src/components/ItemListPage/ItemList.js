import React from 'react';
import { List } from 'antd';
import ItemListCard from './ItemListCard';

export const ItemListType = {
  NORMAL_LIST: 1,
  MY_LIST: 2,
}

class ItemList extends React.Component {

  render() {
    const { items, type } = this.props || [];
    return (
      <div style={{ maxWidth: '100vw', display: 'flex', textAlign: 'center' }}>
        <List
          grid={{ gutter: 0, xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          split={true}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <ItemListCard item={item} type={type} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ItemList;
