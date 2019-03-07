import React from 'react';
import Image from '../Image/Image';

const Gallery = props =>
  props.imgs.map((img, value) => (
    <Image img={img.src} click={props.click} index={value} />
  ));

export default Gallery;
