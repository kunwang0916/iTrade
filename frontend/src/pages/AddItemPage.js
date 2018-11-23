import React, {
  Component
} from 'react';

import {
  Spin,
  notification,
} from 'antd';

import BasicLayout from '../components/common/BasicLayout';
import ItemForm, { ItemFormMode } from '../components/ItemEditPage/ItemForm';
import DatabaseUtils from '../utils/DatabaseUtils';

class AddItemPage extends Component {
  state = {
    item: {},
    loading: false,
  }

  handleItemChange = (item) => {
    this.setState({ item });
  }

  handleItemSave = () => {
    const { item } = this.state || {}
    DatabaseUtils.saveItem(item, (newItem)=>{
      notification.open({
        message: 'save succeed',
        description: 'user profile saved.'
      });
      this.setState({item: newItem})
    });
  }

  render() {
    const { 
      item, 
      loading
    } = this.state || {};
    const content = (
      <React.Fragment>
        { loading ? <Spin /> : null }
        <ItemForm item={item} mode={ItemFormMode.ADD} 
          onChange={this.handleItemChange}
          onSave={this.handleItemSave} />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={'Add Item'} />
    );
  }
}

export default AddItemPage;