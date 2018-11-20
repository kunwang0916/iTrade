import React from 'react';
import { List } from 'antd';
import ItemListCard from './ItemListCard';

class ItemList extends React.Component {

  render() {
    const { items } = this.props || [];
    return (
      <div style={{ maxWidth: 500, display: 'flex', textAlign: 'center' }}>
        <List
          grid={{ gutter: 0, xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
          split={true}
          dataSource={items}
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
