import React from 'react';
import {
  Form,
  Input,
  Divider,
  Button,
  Upload,
  Icon,
  Select,
} from 'antd';
import FileUploadUtils from '../../utils/FileUploadUtils';

export const ItemFormMode = {
  ADD: 1,
  EDIT: 2,
};

const ConditionOptions = [
  'New',
  'Like New',
  'Good',
  'Fair',
  'Poor',
];

const CategoryOptions = [
  'Women',
  'Men',
  'Kids',
  'Home',
  'Vintage',
  'Beauty',
  'Tech',
  'Sports',
  'Handmade',
  'Other',
]

class ItemForm extends React.Component {
  state = {
    imageUploading: false,
  };

  handleUploadImage = (file) => {
    this.setState({ imageUploading: true });
    FileUploadUtils.uploadImage(file, (downloadURL) => {
      this.setState({
        imageUploading: false,
      });

      let { item, onChange } = this.props || {};
      if (item && onChange) {
        if (!item.images) {
          item.images = [];
        }
        item.images.push(downloadURL);
        onChange(item);
      }
    })
  }

  hanldeInputChange = (e) => {
    let { item, onChange } = this.props || {};
    if (item && onChange) {
      const name = e.target.name;
      const value = e.target.value;
      item[name] = value;
      onChange(item);
    }
  }

  handleSelectorChange =(name, value)=> {
    let { item, onChange } = this.props || {};
    if (item && onChange) {
      item[name] = value;
      onChange(item);
    }
  }

  render() {
    const { item } = this.props || {};
    const { imageUploading } = this.state || {};
    const {
      name,
      price,
      condition,
      size,
      category,
      description,
      images,
    } = item || {}

    let imageList = [];
    if (images) {
      imageList = images.map((img, index) => {
        return {
          status: 'done',
          url: img,
          uid: '-' + index,
        };
      });
    }


    const imageUploaderProps = {
      listType: "picture-card",
      className: "avatar-uploader",
      fileList: imageList,
      onRemove: (file) => {
        let { item, onChange } = this.props || {};
        if (item && item.images) {
          item.images = item.images.filter((image) => {
            return image !== file.url;
          });
        }
        onChange(item);
      },
      beforeUpload: (file) => {
        this.handleUploadImage(file);
        return false;
      },
    };

    const uploadButton = (
      <div className="avatar-uploader">
        <Icon type={imageUploading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    const formItemLayout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
        md: {
          span: 16,
          offset: 8,
        },
        lg: {
          span: 16,
          offset: 8,
        },
        xl: {
          span: 16,
          offset: 8,
        },
        xxl: {
          span: 16,
          offset: 8,
        },
      },
    };

    const conditionOptionRows = ConditionOptions.map((op) =>{
      return (
        <Select.Option value={op} key={op}>{op}</Select.Option>
      )
    });
    const conditionSelector = (
      <Select placeholder="Please select condition:"
        value={condition}
        onChange={(value)=>{this.handleSelectorChange('condition', value)}}
      >
        {conditionOptionRows}
      </Select>
    )

    const categoryOptionRows = CategoryOptions.map((op) => {
      return (
        <Select.Option value={op} key={op}>{op}</Select.Option>
      )
    });
    const categorySelector = (
      <Select placeholder="Please select category:"
        value={category}
        onChange={(value) => { this.handleSelectorChange('category', value) }}
      >
        {categoryOptionRows}
      </Select>
    )

    return (
      <React.Fragment>
        <Divider orientation="left">Item Info:</Divider>
        <Form onSubmit={this.handleSubmit} layout='horizontal' 
          style={{ minWidth: '50vw' }}>
          <Form.Item
            {...formItemLayout}
            label="Name"
          >
            <Input name='name'
              value={name || ''}
              onChange={this.hanldeInputChange}/>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Price"
          >
            <Input name='price'
              type='number'
              value={price || ''}
              onChange={this.hanldeInputChange} />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Condition"
          >
            { conditionSelector }
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Size"
          >
            <Input name='size'
              value={size || ''}
              onChange={this.hanldeInputChange}/>
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Category"
          >
            { categorySelector }
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Description"
          >
            <Input.TextArea name='description'
              value={description || ''}
              onChange={this.hanldeInputChange} />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Images"
          >
            <Upload {...imageUploaderProps}>
              {imageList.length >= 3 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary"
              block
              onClick={this.props.onSave}
              disabled={imageUploading}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}


export default ItemForm;
