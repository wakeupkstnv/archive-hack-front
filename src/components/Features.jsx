import React from 'react';

const Features = () => (
  <section className="py-16 bg-[#101010] text-white">
    <h2 className="text-5xl font-bold text-center mb-8">What we can fix</h2>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
      <div className="text-center w-full max-w-xs md:max-w-sm">
        <img 
          src='https://cs9.pikabu.ru/post_img/big/2016/12/08/8/148120518411876062.jpg' 
          alt="Fix rips and tears" 
          className="mb-4 mx-auto rounded shadow-lg hover:shadow-xl transition-shadow duration-300" 
          style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
        />
        <h3 className="font-bold md:text-2xl mb-2">Restore text from photo</h3>
        <p className='md:text-xl'>We'll recover and enhance the clarity of any text in your images, making it readable again.</p>
      </div>
      <div className="text-center w-full max-w-xs md:max-w-sm">
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM4cE9bgt41DhuMnl0Vl4JPc1hrJyOgYGPg&s' 
          alt="Remove water damage" 
          className="mb-4 mx-auto rounded shadow-lg hover:shadow-xl transition-shadow duration-300" 
          style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
        />
        <h3 className="font-bold md:text-2xl mb-2">Restore photo</h3>
        <p className='md:text-xl'>Our AI will bring your old or damaged photos back to life, improving colors and fixing imperfections.</p>
      </div>
    </div>
  </section>
);

export default Features;