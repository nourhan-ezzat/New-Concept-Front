import React, { Component } from 'react';
import { BrowserRouter , Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import LoginPage from './components/login-page';
import ConfirmEmail from './components/confirm-email';
import Profile from './components/profile';
import Store from './store';

const PrivateRoute = ({component: Component, ...props}) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("userToken") ? <Component {...innerProps} />
        : <Redirect to="/"/>}
    />
  );
};

class App extends Component {
    render() {
      return(
        <Provider store={Store}>
          <BrowserRouter>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/confirm-email' component={ConfirmEmail}/>
            <PrivateRoute path="/profile" component={Profile}/>
          </BrowserRouter>
        </Provider>
      );
    }
}

export default App;
