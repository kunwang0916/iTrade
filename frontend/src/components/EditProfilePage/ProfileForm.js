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
  }

  handleUploadImage =(file)=> {
    this.setState({imageUploading: true});
    FileUploadUtils.uploadImage(file, (downloadURL) => {
      this.setState({ 
        imageUploading: false,
      });

      const e = {
        target: {
          name: 'avatar',
          value: downloadURL,
        }
      }
      this.hanldeInputChange(e);
    })
  }

  hanldeInputChange =(e)=> {
    let { profile, onChange } = this.props || {};
    if (profile && onChange) {
      const name = e.target.name;
      const value = e.target.value;
      profile[name] = value;
      onChange(profile);
    }
  }

  render() {
    const { profile, onSave } = this.props || {};
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

    let { imageUploading } = this.state;
    const {
      name,
      city,
      zipcode,
      email,
      phone,
      avatar,
    } = profile || {}

    let imageList = [];
    if (avatar && avatar.length > 0) {
      imageList = [{
        status: 'done',
        url: avatar,
        uid: '-1',
      }]
    }

    const imageUploaderProps = {
      listType: "picture-card",
      className: "avatar-uploader",
      fileList: imageList,
      onRemove: (file) => {
        const e = {
          target: {
            name: 'avatar',
            value: '',
          }
        }
        this.hanldeInputChange(e);
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
      <Form layout='horizontal'
        style={{minWidth: '50vw'}}>
        <Form.Item
          {...formItemLayout}
          label="Name"
        >
          <Input name='name'
            value={name || ''}
            onChange={this.hanldeInputChange}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="City"
        >
          <Input name='city'
            value={city || ''}
            onChange={this.hanldeInputChange}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Zipcode"
        >
          <Input name='zipcode'
            value={zipcode || ''}
            onChange={this.hanldeInputChange}/>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Email"
        >
          <Input name='email'
            value={email || ''}
            onChange={this.hanldeInputChange}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Phone"
        >
          <Input name='phone'
            value={phone || ''}
            onChange={this.hanldeInputChange}
          />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Avatar"
        >
          <Upload {...imageUploaderProps}>
            {imageList.length >= 1 ? null : uploadButton}
          </Upload>
          
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary"
            block
            onClick={onSave}
            disabled={imageUploading}
          >
          Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


export default ProfileForm;
