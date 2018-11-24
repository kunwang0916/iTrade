import React from 'react';
import { 
  Card,
  Carousel,
  Divider,
  Avatar,
  List,
  Icon,
} from 'antd';

import Lightbox from 'react-images';

class ItemDetailCard extends React.Component {
  state = {
    openLightBox: false,
    lightBoxIndex: 0,
  }


  onClickImage =(index)=> {
    this.setState({
      openLightBox: true,
      lightBoxIndex: index,
    });
  }
  
  gotoPrevLightboxImage =()=> {
    this.setState({
      lightBoxIndex: this.state.lightBoxIndex - 1,
    })
  }

  gotoNextLightboxImage =()=> {
    this.setState({
      lightBoxIndex: this.state.lightBoxIndex + 1,
    })
  }

  handleCloseLightBox =()=> {
    this.setState({
      openLightBox: false,
    });
  }

  render() {
    const {
      item,
    } = this.props;

    const images = item.images.map((image, index) => {
      return <img alt="example" src={image} key={index} onClick={()=>this.onClickImage(index)}/>
    });

    const lightBoxImages = item.images.map((image) => {
      return {src: image}
    })

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
        <Lightbox 
          images={lightBoxImages}
          currentImage={this.state.lightBoxIndex}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          isOpen={this.state.openLightBox}
          onClose={this.handleCloseLightBox}
        />
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
          actions={[
            <a href={"tel: " + item.user.phone}>
              <Icon type="phone" />
            </a>,
            <a href={"sms: " + item.user.phone}>
              <Icon type="message" />
            </a>,
            <a href={"mailto: " + item.user.email}>
              <Icon type="mail" />
            </a>
          ]}
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