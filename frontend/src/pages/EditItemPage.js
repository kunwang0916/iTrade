import React, {
  Component
} from 'react';

import BasicLayout from '../components/common/BasicLayout';
import ItemForm, { ItemFormMode } from '../components/ItemEditPage/ItemForm';
import {
  Spin,
  notification,
} from 'antd';
import DatabaseUtils from '../utils/DatabaseUtils';


const itemData = {
  images: [
    "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
    "https://static-mercariapp-com.akamaized.net/photos/m21086634494_2.jpg?1516236464",
    "https://static-mercariapp-com.akamaized.net/photos/m21086634494_3.jpg?1516236464",
    "https://static-mercariapp-com.akamaized.net/photos/m21086634494_4.jpg?1516236464",
  ],
  specs: [
    {
      label: 'Condition',
      text: 'Like New',
    },
    {
      label: 'Size',
      text: 'N/A',
    },
    {
      label: 'Shipping',
      text: 'Free, 2+ days',
    },
    {
      label: 'Category',
      text: 'Camera',
    },
  ],
  description: [
    "Have a really good camera I don't use anymore. I used to do photography as a hobby but now don't have time.Nothing is wrong with the camera.It uses 4 double A batteries and also needs an SD card.Other than that everything is good."
  ],
  title: 'Fujifilm camera',
  subTitle: '$72.00',
  user: {
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    name: 'Kevin J',
    description: 'Mountain View',
  }
}

class EditItemPage extends Component {
  state = {
    item: {},
    loading: false,
  }

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

  handleItemChange = (item) => {
    this.setState({ item });
  }

  handleItemSave = () => {
    const { item } = this.state || {}
    DatabaseUtils.saveItem(item, (newItem)=> {
      notification.open({
        message: 'save succeed',
        description: 'user profile saved.'
      })
      this.setState({
        item: newItem,
      })
    });
    
  }

  render() {
    const {
      item,
      loading
    } = this.state || {};

    const content = (
      <React.Fragment>
        {loading ? <Spin /> : <ItemForm item={item} mode={ItemFormMode.EDIT}
          onChange={this.handleItemChange}
          onSave={this.handleItemSave} />}
        
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={itemData.title} />
    );
  }
}

export default EditItemPage;