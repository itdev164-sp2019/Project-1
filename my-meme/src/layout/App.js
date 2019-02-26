import React, { Component } from 'react';
import image1 from '../Images/images.png';
import image2 from '../Images/Abstract_001.jpg';
import image3 from '../Images/logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from '../components/Elements/Header/Header';
import Home from '../components/Home/Home.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Modal from '../components/Modal/Modal';

const Main = styled.div`
  background-color: '#5baeb5';
  height: 80%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        images: [image1, image3, image2, image1, image1, image1, image1],
        index: 0
      }
    };
  }

  onClick = index => {
    let state = this.state.images;
    state.index = index;
    this.setState({ state });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Main>
            <Route
              exact={true}
              path='/'
              render={() => (
                <Home imgs={this.state.images.images} click={this.onClick} />
              )}
            />
            <Route
              path='/Modal'
              render={() => (
                <Modal
                  img={this.state.images.images[this.state.images.index]}
                />
              )}
            />
          </Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
