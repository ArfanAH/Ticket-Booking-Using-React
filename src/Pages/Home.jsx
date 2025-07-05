import React from 'react';
import Hero from '../Components/Hero';
import Services from './Services';
import TopSearch from './TopSearch';

const Home = () => {
  return (
    <div className="space-y-8 sm:space-y-16 w-full min-h-screen pb-8 sm:pb-16">
      <Hero />
      <Services />
      <TopSearch/>
    </div>
  );
};

export default Home;
