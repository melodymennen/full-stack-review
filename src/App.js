import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AcctInfo from './components/AcctInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/private' component={AcctInfo} />
      </div>
    );
  }
}

export default App;
