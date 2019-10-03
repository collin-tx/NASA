import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Apod from './Components/Apod';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/apod" component={Apod} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
