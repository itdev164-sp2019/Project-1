import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Form from '../Form/Form';

const Outter = styled(Box)`
  width: 90%;
  margin: 0 auto;
  border: 1px solid #656765;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px #404040;
  border-radius: 10px;
  text-align: center;
  margin-top: 1rem;
  max-width: 900px;
`;

const Canvas = styled.canvas`
  cursor: pointer;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #404040;
`;

const CanImg = styled.img`
  display: none;
  width: 150%;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img,
      topVal: '',
      bottomVal: ''
    };
  }
  componentDidMount = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const canvasImg = this.refs.image;
    canvasImg.onload = () => {
      ctx.drawImage(canvasImg, 0, 0, window.innerWidth, window.innerHeight);
    };
  };

  componentDidUpdate = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const canvasImg = this.refs.image;
    ctx.drawImage(canvasImg, 0, 0, window.innerWidth, window.innerHeight);
    ctx.font = ' 50px Electrolize';
    ctx.fillText(this.state.topVal, 110, 75);
    ctx.fillText(this.state.bottomVal, 110, 500);
  };

  changeText = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  render() {
    const imageStyle = {
      backgroundImage: 'url(' + this.state.image + ')',
      backgroundSize: '100%'
    };

    return (
      <Outter>
        <Canvas
          ref='canvas'
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <CanImg ref='image' src={this.state.image} />
        <Box>
          <Form changeText={this.changeText} download={this.fillText} />
        </Box>
      </Outter>
    );
  }
}

export default Modal;
