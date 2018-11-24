import React from 'react';
import { Card } from 'antd';
import {
  Link
} from 'react-router-dom';
import { ItemListType } from './ItemList';

class ItemListCard extends React.Component {

  render() {
    const {
      item,
      type,
    } = this.props;

    let link;
    if (type === ItemListType.MY_LIST) {
      link = 'editItem/' + item.id;
    } else {
      link = 'itemDetail/' + item.id;
    }

    return (
      <Link to={link}>
        <Card
          hoverable
          style={{ width: '246px', display: 'block'}}
          cover={<img alt="thumbnail" src={item.images[0]} style={{ height: '245px' }} />}
        >
          <Card.Meta
            title={item.name}
            description={'$' + item.price}
          />
        </Card>
      </Link>
    )
  }
}

export default ItemListCard;