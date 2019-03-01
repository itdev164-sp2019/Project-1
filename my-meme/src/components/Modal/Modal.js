import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Form from '../Form/Form';

const Outter = styled(Box)`
  width: 90%;
  margin: 0 auto;
  border: 1px solid #656765;
  background-color: #d6d2d1;
  box-shadow: 5px 5px 5px 5px #404040;
  border-radius: 10px;
  text-align: center;
  margin-top: 1rem;
  max-width: 900px;
`;

const Top = styled.div`
  position: absolute;
  top: 35%;
  left: 15%;
  font-size: 120%;
  color: white;
  font-family: 'Electrolize';
  display: none;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 35%;
  left: 15%;
  font-size: 120%;
  color: white;
  font-family: 'Electrolize';
  display: none;
`;
const Img = styled.div`
  cursor: pointer;
  width: 95%;
  min-height: 55vh;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #404040;
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
      text: {
        topVal: 'TOP',
        bottomVal: 'BOTTOM'
      }
    };
  }
  componentDidMount = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const canvasImg = this.refs.image;
    canvasImg.onload = () => {
      ctx.drawImage(canvasImg, 0, 0, window.innerWidth, window.innerHeight);
      ctx.font = ' 50px Electrolize';
      ctx.fillText(this.state.text.topVal, 210, 75);
      ctx.fillText(this.state.text.bottomVal, 500, 75);
    };
  };

  fillText = () => {};

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
        {/*<Img style={imageStyle}>
          
    </Img>*/}
        <Canvas
          ref='canvas'
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <Top ref='top'>{this.state.BottomVal}</Top>
        <Bottom ref='bottom' />
        <CanImg ref='image' src={this.state.image} />
        <Box>
          <Form changeText={this.changeText} download={this.downloadImage} />
        </Box>
      </Outter>
    );
  }
}

export default Modal;
