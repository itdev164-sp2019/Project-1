import React from 'react';
import Image from '../Image/Image';
import { Box } from 'rebass';

const Gallery = props =>
  props.imgs.map((img, value) => (
    <Image img={img} click={props.click} index={value} />
  ));

export default Gallery;
