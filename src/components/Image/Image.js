import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
  cursor: pointer;
  width: 18rem;
  height: 18rem;
  margin: 1rem;
  object-fit: cover;
  float: left;
`;
const Button = styled.button`
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px #2fd;
`;
const Image = props => (
  <Link to='/Modal'>
    <Button onClick={() => props.click(props.index)}>
      <Img src={props.img} alt='' />
    </Button>
  </Link>
);
export default Image;
