import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import ItemListPage from './pages/ItemListPage';
import ItemDetailPage from './pages/ItemDetailPage';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={ItemListPage} />
          <Route path="/itemDetail" component={ItemDetailPage} />
        </div>
      </Router>
    );
  }
}

export default App;
