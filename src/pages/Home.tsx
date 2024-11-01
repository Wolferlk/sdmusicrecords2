import React from 'react';
import Hero from '../components/Hero';
import Artists from '../components/Artists';
import Releases from '../components/Releases';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Artists />
      <Releases />
      <Contact />
    </>
  );
};

export default Home;