import React from 'react';
import {
  Form, 
  Input,
  Button, 
  Upload,
  Icon,
} from 'antd';

import FileUploadUtils from '../../utils/FileUploadUtils';

class ProfileForm extends React.Component {
  state = {
    imageUploading: false,
    fileList: [],
  }

  handleUploadImage =(file)=> {
    this.setState({imageUploading: true});
    FileUploadUtils.uploadImage(file, (downloadURL) => {
      this.setState({ 
        imageUploading: false,
        fileList: [{
          status: 'done',
          url: downloadURL,
          uid: '-1',
        }],
      });
    })
  }


  render() {
    // const { item } = this.props || {};
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

    const { imageUploading, fileList } = this.state;
    const imageUploaderProps = {
      listType: "picture-card",
      className: "avatar-uploader",
      fileList: this.state.fileList,
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
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
    return (
      <Form onSubmit={this.handleSubmit} layout='horizontal' >
        <Form.Item
          {...formItemLayout}
          label="Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="City"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Zipcode"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Email"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Phone"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Avatar"
        >
          <Upload {...imageUploaderProps}>
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}


export default ProfileForm;
