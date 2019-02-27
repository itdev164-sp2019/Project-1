import React, { Component } from 'react';
import image1 from '../Images/images.png';
import image2 from '../Images/Abstract_001.jpg';
import image3 from '../Images/logo.svg';
import image4 from '../Images/sponge.jpg';
import './App.css';
import styled from 'styled-components';
import Header from '../components/Elements/Header/Header';
import Home from '../components/Home/Home.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Modal from '../components/Modal/Modal';

const Main = styled.div`
  background-color: #64c1d2;
  height: 500px;
`;

const Footer = styled.div`
  background-color: #b5acb0;
  height: 100px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        images: [image1, image3, image2, image4, image1, image1, image1],
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
          <Footer>
            <h2>Footer</h2>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
