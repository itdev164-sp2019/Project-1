import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Outter = styled(Flex)`
  background-color: #64c1d2;
  height: 20%;
  padding: 2rem;
`;
const H1 = styled.h1`
  font-family: 'Electrolize';
`;
const Header = props => (
  <Outter>
    <H1>MY MEME</H1>
  </Outter>
);

export default Header;
