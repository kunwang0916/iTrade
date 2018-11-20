import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import ItemListPage from './pages/ItemListPage';
import ItemDetailPage from './pages/ItemDetailPage';
import UserProfilePage from './pages/UserProfilePage';
import EditProfilePage from './pages/EditProfilePage';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={ItemListPage} />
          <Route path="/itemDetail" component={ItemDetailPage} />
          <Route path="/userProfile" component={UserProfilePage} />
          <Route path="/editProfile" component={EditProfilePage} />
        </div>
      </Router>
    );
  }
}

export default App;
