import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from '../components/Elements/Header/Index';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header>My Meme</Header>
      </div>
    );
  }
}

export default App;
