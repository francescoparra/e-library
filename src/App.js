import React from 'react';
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Singlebook from './pages/Singlebook';

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/books/:key' component={Singlebook} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
