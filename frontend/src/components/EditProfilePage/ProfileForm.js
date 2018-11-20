import React from 'react';
import {
  Form, 
  Input,
  Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate,
} from 'antd';

class ProfileForm extends React.Component {

  render() {
    const { item } = this.props || {};
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
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    );
  }
}


export default ProfileForm;
