import React from 'react';
import { 
  Card,
  Carousel,
  Divider,
  Avatar,
  List,
  Icon,
} from 'antd';

class ItemDetailCard extends React.Component {

  render() {
    const {
      item,
    } = this.props;

    const images = item.images.map((image, index) => {
      return <img alt="example" src={image} key={index}/>
    });
    const imageCover = (
      <Carousel autoplay>
        {images}
      </Carousel>
    );

    const marginTop = '10pt';
    let specs = [
      {
        label: 'Condition',
        text: item.condition || 'N/A',
      },
      {
        label: 'Size',
        text: item.size || 'N/A',
      },
      {
        label: 'Category',
        text: item.category || 'N/A',
      },
    ];

    return (
      <Card
        hoverable
        style={{ width: 400 }}
        cover={imageCover}
      >
        <Divider orientation="left">Item Info:</Divider>
        <Card.Meta
          title={item.name}
          description={'$' + item.price}
        />
        <List
          style={{ marginTop: marginTop}}
          bordered
          dataSource={specs || []}
          renderItem={spec => (
            <List.Item>
              <List.Item.Meta
                title={spec.label}
                description={spec.text}
              />
            </List.Item>
          )}
        />
        <Card.Meta
          style={{ marginTop: marginTop }}
          title='Description'
          description={item.description}
        />
        <Divider orientation="left">Seller Info:</Divider>
        <Card
          hoverable={true}
          actions={[<Icon type="phone" />, <Icon type="message" />, <Icon type="mail" />]}
        >
          <Card.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={item.user.name}
            description={item.user.city}
          />
        </Card>
      </Card>
    )
  }
}

export default ItemDetailCard;