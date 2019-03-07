import React, { Component } from 'react';
import { imageConfig } from '../config';
import './App.css';
import styled from 'styled-components';
import Header from '../components/Elements/Header/Header';
import Gallery from '../components/Home/Gallery.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from '../components/Modal/Modal';

const Main = styled.div`
  background-color: #fff;
  min-height: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 3px;
`;
const Footer = styled.footer`
  min-height: 100px;
  max-height: 200px;
  background-color: white;
  margin-top: 20px;
  font-family: 'Electrolize';
  background: -webkit-linear-gradient(#2fd, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 150%;
  text-transform: uppercase;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        images: [...imageConfig],
        index: 0
      },
      title: 'MY | MEME',
      footText: '2019 Papadakis Design INC'
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
          <Header title={this.state.title} />
          <Main>
            <Route
              exact={true}
              path='/'
              render={() => (
                <Gallery
                  imgs={[...this.state.images.images]}
                  click={this.onClick}
                />
              )}
            />
            <Route
              path='/Modal'
              render={() => (
                <Modal
                  img={this.state.images.images[this.state.images.index].src}
                />
              )}
            />
          </Main>
          <Footer>
            <h2>&copy;{this.state.footText}</h2>
          </Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
