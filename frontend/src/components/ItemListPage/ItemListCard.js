import React from 'react';
import { Card } from 'antd';
import {
  Link
} from 'react-router-dom';


class ItemListCard extends React.Component {

  render() {
    const {
      item,
    } = this.props;

    return (
      <Link to={'itemDetail/' + item.id}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={item.images[0]} />}
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