import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Outter = styled(Box)`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid white;
  background-color: #64c1d2;
  box-shadow: 3px 3px 3px 3px #b3b1b0;
  margin-top: 5rem;
  border-radius: 10px;
  text-align: center;
`;

const Input = styled.input`
  margin: 0.5rem, 0, 0.5rem, 0.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  margin: 2rem;
  cursor: pointer;
  padding: 0.5rem;
`;
const Img = styled.div`
  cursor: pointer;
  width: 30%;
  height: 40vh;
  float: left;
  margin-top: 2rem;
  position: relative;
  background-position: center;
  text-align: center;
  background-repeat: no-repeat;
`;

const Top = styled.h1`
  position: absolute;
  top: 10%;
  left: 30%;
  display: inline-block;
`;

const Bottom = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 30%;
  display: inline-block;
`;
const Container = styled(Box)``;
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img,
      topVal: 'Top',
      bottomVal: 'Bottom'
    };
  }

  changeText = e => {};

  render() {
    const imageStyle = {
      backgroundImage: 'url(' + this.state.image + ')',
      backgroundSize: '100%'
    };
    return (
      <Flex width={1} alignItems='center'>
        <Outter>
          <Container width={1} mx={5} alignItems='center'>
            <Img style={imageStyle}>
              <Top>{this.state.topVal}</Top>
              <Bottom>{this.state.bottomVal}</Bottom>
            </Img>
          </Container>
          <Box width={[1 / 2, 1]} alignItems='center'>
            <h2>Top Text</h2>
            <Input id='1' placeholder='Top LINE OF MEME' />
            <h2>Bottom Text</h2>
            <Input id='2' placeholder='Bottom LINE OF MEME' />
          </Box>
          <Link to='/'>
            <Button>Home Page</Button>
          </Link>
        </Outter>
      </Flex>
    );
  }
}

export default Modal;
