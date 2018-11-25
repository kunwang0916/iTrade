import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import SignInPage from './pages/SignInPage';
import ItemListPage from './pages/ItemListPage';
import ItemDetailPage from './pages/ItemDetailPage';
import UserProfilePage from './pages/UserProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import MyItemsPage from './pages/MyItemsPage';
import EditItemPage from './pages/EditItemPage';
import AddItemPage from './pages/AddItemPage';
import ScrollToTop from './components/common/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router basename={"/iTrade"}>
        <ScrollToTop>
          <Route exact path="/" component={ItemListPage} />
          <Route exact path='/signIn' component={SignInPage} />
          <Route path="/itemDetail" component={ItemDetailPage} />
          <Route path="/userProfile" component={UserProfilePage} />
          <Route path="/myProfile" component={EditProfilePage} />
          <Route path="/editProfile" component={EditProfilePage} />
          <Route path="/myItems" component={MyItemsPage} />
          <Route path="/editItem" component={EditItemPage} /> 
          <Route path="/addItem" component={AddItemPage} /> 
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
