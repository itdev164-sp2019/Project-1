import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
  cursor: pointer;
  width: 10rem;
  height: 20rem;
  float: left;
`;
const Image = props => (
  <Link to='/Modal'>
    <button onClick={() => props.click(props.index)}>
      <Box width={1} mx={5} alignItems='center'>
        <Img src={props.img} alt='' />
      </Box>
    </button>
  </Link>
);
export default Image;
