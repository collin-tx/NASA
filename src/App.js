import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Apod from './Components/Apod';
import Epic from './Components/Epic';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/apod" component={Apod} />
        <Route path="/epic" component={Epic} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
