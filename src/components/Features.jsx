import React from 'react';
import lady from '../assets/archive_frame.png';

const Features = () => (
  <section className="py-16 bg-[#101010] text-white">
    <h2 className="text-5xl font-bold text-center mb-8">What we can fix</h2>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
      <div className="text-center w-full max-w-xs md:max-w-sm">
        <img src={lady} alt="Fix rips and tears" className="mb-4 rounded mx-auto" />
        <h3 className="font-bold md:text-2xl mb-2">Restore text from photo</h3>
        <p className='md:text-xl'>We'll recover and enhance the clarity of any text in your images, making it readable again.</p>
      </div>
      <div className="text-center w-full max-w-xs md:max-w-sm">
        <img src={lady} alt="Remove water damage" className="mb-4 rounded mx-auto" />
        <h3 className="font-bold md:text-2xl mb-2">Restore photo</h3>
        <p className='md:text-xl'>Our AI will bring your old or damaged photos back to life, improving colors and fixing imperfections.</p>
      </div>
    </div>
  </section>
);

export default Features;
