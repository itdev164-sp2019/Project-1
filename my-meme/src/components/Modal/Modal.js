import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Outter = styled(Box)`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid black;
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
const Img = styled.img`
  min-width: 5rem;
  cursor: pointer;
  width: 30%;
  height: 30%;
  min-width: 3em;
  float: left;
  margin-top: 2rem;
`;

const Top = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
`;

const Bottom = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 50%;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img
    };
  }

  render() {
    return (
      <Flex width={1} alignItems='center'>
        <Outter>
          <Box width={1} mx={5} alignItems='center'>
            <Container>
              <Img src={this.state.image} />
              <Top>Top</Top>
              <Bottom />
            </Container>
          </Box>
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
