import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
  cursor: pointer;
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  object-fit: cover;
  float: left;
`;
const Button = styled.button`
  background-color: #fff;
`;
const Image = props => (
  <Link to='/Modal'>
    <Button onClick={() => props.click(props.index)}>
      <Box width={1} mx={5} alignItems='center'>
        <Img src={props.img} alt='' />
      </Box>
    </Button>
  </Link>
);
export default Image;
