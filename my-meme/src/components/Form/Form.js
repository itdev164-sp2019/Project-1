import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { Link } from 'react-router-dom';

const Button = styled.button`
  margin: 2px;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10%;
  background-color: #565545;
  color: white;
  box-shadow: 2px 2px 2px 2px #aaa99d;
  width: 75%;
`;

const Label = styled.label`
  font-family: 'Electrolize';
  font-weight: bold;
  margin-top: 5px;
`;

const FormEl = styled.form`
  text-align: center;
  margin: 0 auto;
`;
const Input = styled.input`
  padding: 0.5rem;
  background-color: #9a9b99;
  width: 90%;
`;

const Form = props => (
  <Box width={[1 / 2]} mx={5} alignItems='center'>
    <FormEl>
      <Label name='label1'>Top</Label>
      <Input
        name='topVal'
        id='1'
        placeholder='Top Text'
        maxLength='25'
        onChange={props.changeText}
      />
      <Label name='label2'>Bottom</Label>
      <Input
        name='BottomVal'
        id='2'
        maxLength='25'
        placeholder='Bottom Text'
        onChange={props.changeText}
      />
      <Button href='this.state.image' download>
        Download MEME
      </Button>
      <Link to='/'>
        <Button>Gallery</Button>
      </Link>
    </FormEl>
  </Box>
);

export default Form;
