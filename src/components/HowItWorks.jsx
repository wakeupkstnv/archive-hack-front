import React from 'react';
import { Upload, ArrowRight } from 'lucide-react';

const HowItWorks = () => (
  <section className="py-16 bg-[#101010] text-white">
    <h2 className="text-3xl font-bold text-center mb-8">How it works</h2>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
      <div className="text-center max-w-xs">
        <Upload size={60} className="mx-auto md:text-xl mb-4" />
        <h3 className="font-bold mb-2">Upload your image</h3>
        <p>Choose the photo you'd like to restore, and upload it to our site.</p>
      </div>
      <div className="text-center max-w-xs">
        <ArrowRight size={60} className="mx-auto mb-4" />
        <h3 className="font-bold md:text-xl mb-2">We'll repair your photo</h3>
        <p>Our AI technology will go to work, repairing any damage or imperfections.</p>
      </div>
      <div className="text-center max-w-xs">
        <Upload size={60} className="mx-auto mb-4 transform rotate-180" />
        <h3 className="font-bold md:text-xl mb-2">Download your restored image</h3>
        <p>Once your photo is restored, you can download the file and share it with friends and family.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;