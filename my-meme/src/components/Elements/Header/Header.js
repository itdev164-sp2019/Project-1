import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Outter = styled(Box)`
  background-color: #c5c5c5;
  height: 20%;
  padding: 2rem;
`;
const Header = props => (
  <Outter>
    <h1>My Meme</h1>
  </Outter>
);

export default Header;
