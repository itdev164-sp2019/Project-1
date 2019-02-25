import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Outter = styled.div`
  width: 50rem;
  height: 30rem;
  margin: 0 auto;
  border: 1px solid black;
  background-color: black;
  box-shadow: 1px 1px 1px 1px black;
  margin-top: 5rem;
  border-radius: 10px;
`;

const Inner = styled.div`
  width: 48rem;
  height: 28rem;
  margin: 0 auto;
  border: 1px solid black;
  background-color: white;
  padding: 0.5rem;
`;

const Img = styled.img`
  cursor: pointer;
  width: 20rem;
  height: 20rem;
  float: left;
  margin-top: 2rem;
`;

const Main = styled.div`
  background-color: #acadb0;
  width: 48rem;
  height: 26rem;
  box-shadow: 1px 1px 1px 1px black;
`;
const Input = styled.input`
  margin: 0.5rem, 0rem, 0.5rem, 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  margin-top: 13rem;
  margin-left: 13rem;
  float: left;
  cursor: pointer;
  padding: 0.5rem;
`;
const Modal = props => (
  <Flex width={1} mx={5} alignItems='center'>
    <Outter>
      <Inner>
        <Main>
          <Box width={1} mx={5} alignItems='center'>
            <h1>
              Hello
              <Img src={props.img} alt='' />
            </h1>
          </Box>
          <h2>Top Text</h2>
          <Input id='1' placeholder='Top LINE OF MEME' />
          <h2>Bottom Text</h2>
          <Input id='2' placeholder='Bottom LINE OF MEME' />
          <Link to='/'>
            <Button>Home Page</Button>
          </Link>
        </Main>
      </Inner>
    </Outter>
  </Flex>
);

export default Modal;
