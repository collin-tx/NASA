import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Apod from './Components/Apod';
import Epic from './Components/Epic';
import Nav from './Components/Nav';
import Mars from './Components/Mars';
import 'bootstrap/dist/css/bootstrap.css'
import Asteroids from './Components/Asteroids';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/apod" component={Apod} />
        <Route path="/epic" component={Epic} />
        <Route path="/mars" component={Mars} />
        <Route path="/asteroids" component={Asteroids} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
