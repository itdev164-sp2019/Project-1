import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Form from '../Form/Form';

const Outter = styled(Box)`
  width: 90%;
  margin: 0 auto;
  border: 1px solid #656765;
  background-color: #fff;
  box-shadow: 2px 2px 2px 2px #404040;
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
`;

const CanImg = styled.img`
  display: none;
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

  fullCanvas = canvas => {
    return canvas;
  };

  downloadFile = e => {
    e.preventDefault();
    const canvas = this.refs.canvas;
    const canvasImg = this.refs.image;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(canvasImg, 0, 0, window.innerWidth, window.innerHeight);
    ctx.font = ' 50px Electrolize';
    ctx.fillText(this.state.topVal, 110, 75);
    ctx.fillText(this.state.bottomVal, 110, 500);
    const canvasData = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'meme.png';
    a.href = canvasData;
    document.body.appendChild(a);
    a.click();
  };

  render() {
    return (
      <Outter>
        <Canvas
          ref='canvas'
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <CanImg ref='image' crossOrigin='anonymous' src={this.state.image} />
        <Box>
          <Form changeText={this.changeText} download={this.downloadFile} />
        </Box>
      </Outter>
    );
  }
}

export default Modal;
