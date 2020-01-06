import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shoppage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //subscrpte to firebase and check user's status
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    //unsubscribe checking user's status
    this.unsubscribeFromAuth(); //
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={SigninAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
