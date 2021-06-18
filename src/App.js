import React, { Component } from 'react'; 
import './App.css';
import Mainpage from './components/mainpage';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Details from './components/details';
import NotFound from './components/notfound';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/notfound' component={NotFound} />
          <Route path='/home/:name' component={Details} />
          <Route path='/home' component={Mainpage}/>
          <Redirect from='/' exact to='/home'/>
          <Redirect to='/notfound'/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
