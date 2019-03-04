import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Link } from 'react-router-dom';

const Outter = styled(Flex)`
  background-color: #ffffff;
  min-height: 20vh;
  color: #000;
  margin-bottom: 10px;
`;
const H1 = styled.h1`
  font-family: 'Electrolize';
  margin-left: 5%;
  text-decoration: none;
`;
const HeadLink = styled(Link)`
  text-decoration: none;
`;
const Header = props => (
  <HeadLink to='/'>
    <Outter>
      <H1>{props.title}</H1>
    </Outter>
  </HeadLink>
);

export default Header;
