import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AcctInfo from './components/AcctInfo';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/private" component={AcctInfo} />
      </div>
    );
  }
}

export default App;
