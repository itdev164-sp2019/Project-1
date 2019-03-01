import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Outter = styled(Flex)`
  background-color: #ffffff;
  min-height: 20vh;
  color: #000;
  margin-bottom: 10px;
`;
const H1 = styled.h1`
  font-family: 'Electrolize';
  margin-left: 5%;
`;
const Header = props => (
  <Outter>
    <H1>{props.title}</H1>
  </Outter>
);

export default Header;
