import React from 'react';
import Image from '../Image/Image';

const Home = props =>
  props.imgs.map((img, value) => (
    <Image img={img} click={props.click} index={value} />
  ));

export default Home;
