import React from 'react';
import {
  Form,
  Input,
  Divider,
  Button, Upload, Icon,
} from 'antd';

class ItemForm extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })


  render() {
    // const { item } = this.props || {};
    const { 
      // previewVisible,
      // previewImage, 
      fileList 
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

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
    return (
      <React.Fragment>
        <Divider orientation="left">Item Info:</Divider>
        <Form onSubmit={this.handleSubmit} layout='horizontal' >
          <Form.Item
            {...formItemLayout}
            label="Name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Price"
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Condition"
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Size"
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Category"
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Description"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Images"
          >
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 3 ? null : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}


export default ItemForm;
