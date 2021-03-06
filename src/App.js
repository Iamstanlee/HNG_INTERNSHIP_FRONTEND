import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/auth/login';
import Signup from './pages/auth/sign_up';
import Home from './pages/home'

function App() {
 return (
  <div>
   <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/home" component={Home} />
    <Route render={notFound} />
   </Switch>
  </div>
 );
}

function notFound() {
 return (
  <p style={{ textAlign: 'center', fontFamily: 'Ubuntu' }}>
   Error 404
  </p>
  //
 );
}
export default App;
