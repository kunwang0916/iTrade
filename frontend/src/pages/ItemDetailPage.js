import React, {
  Component
} from 'react';

import BasicLayout from '../components/common/BasicLayout';
import ItemDetail from '../components/ItemDetailPage/ItemDetail';

class ItemDetailPage extends Component {
  render() {
    const content = (
      <React.Fragment>
        <ItemDetail />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"Item Detail"} />
    );
  }
}

export default ItemDetailPage;