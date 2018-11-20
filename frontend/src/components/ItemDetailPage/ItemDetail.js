import React from 'react';
import { 
  Row, 
  Col,
} from 'antd';

import ItemDetailCard from './ItemDetailCard';

class ItemDetail extends React.Component {

  render() {
    const { item } = this.props || {};
    return (
      <Row type="flex" justify="center">
        <Col>
          <ItemDetailCard item={item} />
        </Col>
      </Row>
  );
  }
}


export default ItemDetail;
