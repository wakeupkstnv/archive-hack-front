import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const Main = () => (
  <div className=" bg-[#101010] text-white min-h-screen ">
    <Header />
    <Hero />
    <Features />
    <HowItWorks />
  </div>
);

export default Main;