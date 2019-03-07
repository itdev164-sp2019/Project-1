import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Link } from 'react-router-dom';

const Button = styled.button`
  margin: 2px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5%;
  background-color: #fff;
  color: black;
  box-shadow: 2px 2px 2px 2px #aaa99d;
  width: 100%;
`;

const Label = styled.label`
  font-family: 'Electrolize';
  font-weight: bold;
  margin-top: 5px;
  margin: 0 auto;
  text-align: center;
`;

const FormEl = styled.form`
  text-align: center;
  margin: 0 auto;
`;
const Input = styled.input`
  padding: 0.5rem;
  background-color: #fff;
  width: 100%;
`;

const Form = props => (
  <Box width={1 / 2} mx={5} alignItems='center'>
    <FormEl>
      <Label name='label1'>Top</Label>
      <Input
        name='topVal'
        id='1'
        placeholder='Top Text'
        maxLength='50'
        onChange={props.changeText}
      />
      <Label name='label2'>Bottom</Label>
      <Input
        name='bottomVal'
        id='2'
        maxLength='50'
        placeholder='Bottom Text'
        onChange={props.changeText}
      />
      <Link to='/'>
        <Button onClick={props.download}>Download</Button>
      </Link>
    </FormEl>
    <Link to='/'>
      <Button>Gallery</Button>
    </Link>
  </Box>
);

export default Form;
