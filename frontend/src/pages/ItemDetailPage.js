import React, {
  Component
} from 'react';
import {
  Spin
} from 'antd';

import { withRouter } from 'react-router';
import DatabaseUtils from '../utils/DatabaseUtils';
import BasicLayout from '../components/common/BasicLayout';
import ItemDetail from '../components/ItemDetailPage/ItemDetail';

class ItemDetailPage extends Component {
  state = {
    loading: true,
    item: {},
  };

  componentDidMount() {
    this.loadItemInfo();
  }

  loadItemInfo = () => {
    this.setState({
      loading: true,
    });
    const array = this.props.location.pathname.split('/');
    const id = array[array.length - 1];
    DatabaseUtils.loadItem(id, (item) => {
      this.setState({
        loading: false,
        item: item,
      });
    })
  }

  render() {
    const { loading, item } = this.state || {};
    const content = (
      <React.Fragment>
        {loading ? <Spin /> : <ItemDetail item={item} />}
      </React.Fragment>
    )
    let title = '';
    if (item) {
      title = item.name || '';
    }
    return (
      <BasicLayout content={content} title={title} />
    );
  }
}

export default withRouter(ItemDetailPage);