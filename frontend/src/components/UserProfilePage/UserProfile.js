import React from 'react';
import { 
  Card, 
  Icon, 
  Button,
  Divider,
} from 'antd';

import {
  Link
} from 'react-router-dom';

import ItemList from '../ItemListPage/ItemList';

const userProfile = {
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  name: 'Kevin J',
  description: 'Mountain View',
  sellingItems: [
    {
      images: [
        "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
      ],
      title: 'Fujifilm camera',
      subTitle: '$72.00',
    },
    {
      images: [
        "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
      ],
      title: 'Fujifilm camera',
      subTitle: '$72.00',
    },
    {
      images: [
        "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
      ],
      title: 'Fujifilm camera',
      subTitle: '$72.00',
    },
    {
      images: [
        "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
      ],
      title: 'Fujifilm camera',
      subTitle: '$72.00',
    },
    {
      images: [
        "https://static-mercariapp-com.akamaized.net/photos/m21086634494_1.jpg?1516236464",
      ],
      title: 'Fujifilm camera',
      subTitle: '$72.00',
    },
  ],
}

class UserProfile extends React.Component {

  render() {
    const avatarCover = (
      <div style={{margin: '20pt', textAlign: 'center'}}>
        <img src={userProfile.avatar} height='100pt' alt='avatar'/>
      </div>
    )

    const isMyProfile = true;
    return (
      <React.Fragment>
        <Card
          style={{ width: 500 }}
          actions={[<Icon type="phone" />, <Icon type="message" />, <Icon type="mail" />]}
          cover={avatarCover}
        >
          <Card.Meta
            title={userProfile.name}
            description={userProfile.description}
          />
        </Card>
        { isMyProfile ? (
            <Button type="primary" block
              style={{ marginTop: '10pt' }}
            >
              <Link to={'editProfile'}>
                Edit
              </Link>
            </Button>
          ) : null
        }
        <Divider orientation="left">Selling:</Divider>
        <ItemList items={userProfile.sellingItems} />
      </React.Fragment>
    );
  }
}

export default UserProfile;
